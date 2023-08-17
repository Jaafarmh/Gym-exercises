import { Box, Button, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{
            mt:{lg:'212px', xs:'70px'},
            ml:'50px'
        }} position='relative' Typography='20px'>
            <Typography color='#ff2625' fontWeight='600' fontSize='26px'>
                Fitness Club
            </Typography>   
            <Typography  fontWeight='700'
            sx={{
                fontSize :{lg:'44px',xs:'40px'}
            }}>
                Sweat, Smile <br /> and Repeat
            </Typography>   
            <Typography  fontSize='22px' mb={4}>
                Check out the most effective exercises
            </Typography>
            
            <Button variant='contained' color='error' href='#exercises'  sx={{ backgroundColor:'#ff2625', p:'10px'}} >Explore Exercises</Button>
            <Typography fontWeight={200} fontSize={200} color='#ff2625' mt={5}
            sx={{
                opacity:'0.1',
                display:{md:'block ', xs:'none'}
            }} >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
        </Box>
    );
}

export default HeroBanner;
