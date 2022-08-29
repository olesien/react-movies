import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";

function NavStatus({ progress }) {
    //Breadcrumb using history
    return (
        <Breadcrumb>
            {progress.map((crumb, index) => (
                <Breadcrumb.Item
                    active={crumb.active}
                    key={index}
                    linkAs={NavLink}
                    linkProps={{ to: crumb.url }}
                >
                    {crumb.name}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
}
export default NavStatus;
