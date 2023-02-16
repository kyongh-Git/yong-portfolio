import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <LogoOne src='/images/logo_transparent_edit.png' />
                    {/* temp sign in */}
                    <SignUp href="/home">CHECK MY PORTFOLIO</SignUp>
                    <Description>
                        As a recent graduate of Oklahoma State University's Computer Science program, I am excited to begin my career as a software developer. With a strong foundation in languages such as Python, Java, and C#, as well as experience in web frameworks like React and ASP.NET, I am confident in my ability to create high-quality software solutions.
                    </Description>
                </Logo>
                <BackgroundImage />
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    dispaly: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BackgroundImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/greg-rosenke-6QnEf_b47eA-unsplash.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const Logo = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 300px;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const LogoOne = styled.img`
    margin-bottom: 0px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 70%;
  }
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export default Login;