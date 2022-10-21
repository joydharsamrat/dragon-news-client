import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaDiscord, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandsCarousel/BrandCarousel';
import { authContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const { providerLogin } = useContext(authContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2 rounded' variant='outline-primary'> <FaGoogle /> Login with google</Button>
                <Button className='mb-2 rounded' variant='outline-dark'><FaGithub /> Login with github</Button>
            </ButtonGroup>
            <div className='my-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 rounded border'> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'> <FaYoutube /> YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaDiscord /> Discord</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;