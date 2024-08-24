import DetailPage from ".";

export default async function Detail({params}: any) {

  const {id} = params;

  const res = await fetch("https://api.imgflip.com/get_memes");
  const data: any = await res.json();
  let allItems = data.data.memes;
  const item = allItems.find((item: any) => item.id === id);

  return <DetailPage response={item}/>
}
