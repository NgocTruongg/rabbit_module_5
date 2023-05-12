import axios from "axios";


export default function UserList({users}) {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export const getStaticProps = async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users")
    return {
        props: {
            users: result.data
        }
    }
}