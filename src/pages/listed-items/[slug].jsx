import { useRouter } from "next/router";

const ListedItems = () => { 
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>You clicked on item with ID: {id}</p>
    </div>
  );
};

export default ListedItems;
