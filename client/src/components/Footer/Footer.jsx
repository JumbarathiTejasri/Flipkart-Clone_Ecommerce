import { Box, Typography, styled, Select, MenuItem } from '@mui/material';
import { Facebook, Twitter, Instagram, Language } from '@mui/icons-material';

// Styled Components
const FooterContainer = styled(Box)`
    background: #232F3E;
    color: white;
    padding: 40px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const FooterSection = styled(Box)`
    margin: 10px 20px;
    min-width: 200px;
`;

const FooterTitle = styled(Typography)`
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 18px;
`;

const FooterLink = styled(Typography)`
    margin: 5px 0;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const SocialIcons = styled(Box)`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const BottomBar = styled(Box)`
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #3a4553;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const SelectBox = styled(Select)`
    background: white;
    color: black;
    height: 35px;
    margin-left: 10px;
`;

const Footer = () => {
    return (
        <Box>
            <FooterContainer>
                <FooterSection>
                    <FooterTitle>Get to Know Us</FooterTitle>
                    <FooterLink>About Flipkart</FooterLink>
                    <FooterLink>Careers</FooterLink>
                    <FooterLink>Press Releases</FooterLink>
                    <FooterLink>Flipkart Stories</FooterLink>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Connect with Us</FooterTitle>
                    <FooterLink>Facebook</FooterLink>
                    <FooterLink>Twitter</FooterLink>
                    <FooterLink>Instagram</FooterLink>
                    <SocialIcons>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </SocialIcons>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Make Money with Us</FooterTitle>
                    <FooterLink>Sell on Flipkart</FooterLink>
                    <FooterLink>Flipkart Global Selling</FooterLink>
                    <FooterLink>Become an Affiliate</FooterLink>
                    <FooterLink>Advertise Your Products</FooterLink>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Let Us Help You</FooterTitle>
                    <FooterLink>Your Account</FooterLink>
                    <FooterLink>Returns Centre</FooterLink>
                    <FooterLink>100% Purchase Protection</FooterLink>
                    <FooterLink>Help</FooterLink>
                </FooterSection>
            </FooterContainer>

            {/* Bottom Bar */}
            <BottomBar>
                <Box display="flex" alignItems="center">
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Flipkart</Typography>
                    <Language style={{ marginLeft: 10 }} />
                    <SelectBox defaultValue="English">
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="Hindi">Hindi</MenuItem>
                        <MenuItem value="Telugu">Telugu</MenuItem>
                    </SelectBox>
                </Box>

                <Box>
                    <Typography variant="caption">© 2025 Flipkart Clone by Teju</Typography>
                </Box>
            </BottomBar>
        </Box>
    );
};

export default Footer;
