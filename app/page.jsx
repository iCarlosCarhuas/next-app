async function fetchUsers(){
  
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json();
  return data.data
}


async function IndexPage() {
  const users = await fetchUsers()
  return (
    <div>
      Index Page
      <div>
        {JSON.stringify(users)}
      </div>
    </div>
    )
}

export default IndexPage;