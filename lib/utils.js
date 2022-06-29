
import { getItems } from "../services/itemService";

export async function getPathsFromIds(){

  const items = await getItems();

  const ids = items.map(item => {
    return{
      params:{
        // id:item.id,
        id:item.id.toString(),
      },
    };
  });

  return ids;
}

export async function getItemData(id){
  const items = await getItems();

  const product =  items.find((item) => item.id.toString() === id);

  return {
    id:id,
    data:product,
  }
}

export function convertToPath(title){
  return title.toLowerCase().replace(/\s/g, "-");
}