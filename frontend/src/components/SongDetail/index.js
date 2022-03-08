import { NavLink } from "react-router-dom";

const SongDetail = ({ id, title }) => {
    return (
        <li>
            <NavLink to={`/songs/${id}`}>{title}</NavLink>
        </li>
    );
};

export default SongDetail;
