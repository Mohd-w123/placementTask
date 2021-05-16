import React,{useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="header_nav">
        <div className="container" style={{padding:0,backgroundColor:"#f1f1f1"}}>
            <Navbar light expand="md" style={{padding:'auto 0'}}>
                <a href="/"><NavLink style={{color:'black',fontSize:"1.2rem",padding:0,margin:0}} className="font-weight-bold">Home</NavLink></a>
            <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <>
                        <NavItem>
                        <NavLink>Find Frequent words</NavLink>
                        </NavItem>

                       
                    </>

                </Nav>
                </Collapse>
            </Navbar>
        </div></div>
    )
}
export default Header