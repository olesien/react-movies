import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";

function NavStatus({ progress }) {
    return (
        <Breadcrumb>
            {/* <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
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
