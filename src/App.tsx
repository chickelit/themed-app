import { globalCss } from "./stitches.config";
import { Card } from "./components/Card";
import { Container } from "./components/Container";
import { Details } from "./components/Details";
import { Picture } from "./components/Picture";
import { Social } from "./components/Social";
import { Socials } from "./components/Socials";
import { SwitchButton } from "./components/SwitchButton";
import { InstagramIcon } from "./components/InstagramIcon";
import { GithubIcon } from "./components/GithubIcon";
import { WhatsAppIcon } from "./components/WhatsAppIcon";
import { ThemeContext } from "./utils/ThemeContext";
import { useTheme } from "./utils/useTheme";

const globalStyles = globalCss({
  body: {
    fontFamily: "Poppins, Arial, Helvetica, sans-serif",
  },
  "*": {
    outline: "none",
  },
});

function App() {
  globalStyles();

  const [theme, setTheme] = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Container>
        <Card
          style={{
            position: "relative",
          }}
        >
          <SwitchButton
            onClick={toggleTheme}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
            }}
          />
          <Picture>
            <img src="/img/me.jpeg" alt="Picture of José Anselmo" />
          </Picture>
          <Details title="José Anselmo" paragraph="Desenvolvedor Fulstack" />
          <Socials>
            <Social href="https://instagram.com/tete5275/" target="_blank">
              <InstagramIcon />
            </Social>
            <Social href="https://github.com/jose13162/" target="_blank">
              <GithubIcon />
            </Social>
            <Social href="https://wa.me/5587999399425/" target="_blank">
              <WhatsAppIcon />
            </Social>
          </Socials>
        </Card>
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
