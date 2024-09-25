import { Colors } from "@/constants/Colors";
import { useQuery } from "@tanstack/react-query";

interface Pokemon {
    name: string;
    url: string;
}
  
interface PokemonResponse {
    results: Pokemon[];
}

type PokemonType = keyof typeof Colors;

const API = 'https://pokeapi.co/api/v2/';
const endpoint : string = "https://pokeapi.co/api/v2/pokemon/"

const getGender = async (id: string | string[]) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/gender/${id}/`);
    return response.json();
  } catch (error) {
    throw new Error("Not found");
    
  }
}

const getEggGroups = async (id: string | string[]) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/egg-group/${id}/`);
    return response.json();
  } catch (error) {
    throw new Error("Not found");
    
  }
}

const getHabitat = async (id: string | string[]) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${id}/`);
    return response.json();
  } catch (error) {
    throw new Error("Not found");
    
  }
}

export const usePokemons = (path: string) => {
    const { data, isLoading } = useQuery<PokemonResponse>({
      queryKey: [path],
      queryFn: async () => {
        const response = await fetch(`${API}${path}`);
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        return response.json();
      },
    });
  
    return {
      pokemons: data,
      isLoading,
    };
};

export const useGetInformation = (endpoint: string) => {
    const { data, isLoading } = useQuery({
      queryKey: [endpoint],
      queryFn: async () => {
        const response = await fetch(`${endpoint}`);
        return response.json();
      },
    });

    const pokemonType: PokemonType = data?.types[0]?.type?.name;
  
    return {
      image: data?.sprites?.other?.home?.front_default,
      number: data?.id,
      abilities: [data?.abilities[0]?.ability?.name, data?.abilities[1]?.ability?.name],
      name: data?.name,
      height: data?.height,
      weight: data?.weight,
      color: pokemonType,
      types: [data?.types[0]?.type?.name, data?.types[1]?.type?.name],
      stats: {
        hp: data?.stats[0]?.base_stat,
        attack: data?.stats[1]?.base_stat,
        defense: data?.stats[2]?.base_stat,
        specialAttack: data?.stats[3]?.base_stat,
        specialDefense: data?.stats[4]?.base_stat,
        speed: data?.stats[5]?.base_stat,
      },
      isLoading,
    };
}

export const useGetHabitat = (id: string | string[]) => {
    const { data, isLoading } = useQuery({
      queryKey: [`habitat-${id}`],
      queryFn: () => getHabitat(id),
    });

    return {
      habitat: data?.name,
      isLoading,
    };
}
export const useGetGender = (id: string | string[]) => {
    const { data, isLoading } = useQuery({
      queryKey: [`gender-${id}`],
      queryFn: () => getGender(id),
    });

    return {
      gender: data?.name,
      isLoading,
    };
}
export const useGetEggGroups = (id: string | string[]) => {
    const { data, isLoading } = useQuery({
      queryKey: [`egg-${id}`],
      queryFn: () => getEggGroups(id),
    });

    return {
      egg: data?.name,
      isLoading,
    };
}

export const useSearchPokemon = (id: string | string[]) => {
  const { isSuccess, isError } = useQuery({
    queryKey: ['Pokemons', id],
    queryFn: async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
        return response.json();
      } catch (error) {
        throw new Error("Not found");
      }
    }
  })

  return {
    sucess: isSuccess,
    error: isError,
  }
}