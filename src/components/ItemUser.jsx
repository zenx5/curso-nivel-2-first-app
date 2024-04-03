export default function ItemUser({ user }) {
    return <li className="py-2 flex flex-col hover:font-bold">
        <span>{user.name} ({user.email})</span>
        <span>{user.phone}</span>
    </li>
}