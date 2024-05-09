import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { isValidSuiObjectId } from "@mysten/sui.js/utils";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { Counter } from "./Counter";
import { CreateCounter } from "./CreateCounter";
import { requestSuiFromFaucetV0, getFaucetHost } from '@mysten/sui.js/faucet';

import placeYourBetsImage from './assets/images/x4.png';
import { useTransactionExecution } from './useTransactionExecution';

import './App.css';
import About from "./About";
import GameLogic from "./GameLogic";
import TotalSum from "./TotalSum";
import WinOrLose from "./WinOrLose";

import homeImage from './assets/x2.png';
import suiImage from './assets/x3.png';

//


// deduct 10 from account when bet placed
// add 20 to account if guessed correctly


//


const App: React.FC = () => 
{
  // connect surrent account
  const currentAccount = useCurrentAccount();
  const [showAboutPage, setShowAboutPage] = useState(true);

  const [counterId, setCounter] = useState(() => 
  {
    const hash = window.location.hash.slice(1);
    return isValidSuiObjectId(hash) ? hash : null;
  });

  // method to show PLAY
  const showEndless = () => 
  {
    setShowAboutPage(false);  
  };
 
  // method to show ABOUT
  const showAbout = () => 
  {
    setShowAboutPage(true); 
  };
 

  // buy sui
  const buySui = async () => 
  {
    if (currentAccount?.address) 
    {
      try 
      {
        const response = await requestSuiFromFaucetV0(
        {
          host: getFaucetHost('devnet'),
          recipient: currentAccount.address,
        });
        console.log('Successfully requested SUI from the faucet:', response);
      } catch (error) 
      {
        console.error('Failed to request SUI from faucet:', error);
      }
    } else 
    {
      console.log('Please connect your wallet.');
    }
  };
 

  return (
    <>
      <Flex>
        <Box>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <Box>
            <section className="suiImageCSS">
              <img src={suiImage} alt="Home" />
            </section>
          </Box>  
          <br></br>
          <center><Heading className="endlessSUI"><h1> 𝚎𝚗𝚍𝚕𝚎𝚜𝚜<b>𝚂𝚄𝙸</b> </h1></Heading></center>
          <br></br>
          <Box>
            <div className="centerContent">
              <ConnectButton className="connectionButton" />
              <a href="#" onClick={showEndless} className="endlessButton">Endless</a>
              <a href="#" onClick={showAbout} className="aboutButton">About</a>
              <button className="buyButton" onClick={buySui}>CLAIM sui</button>
            </div>
          </Box>
        </Box>

      </Flex>

      <Container>
        <Container
          mt="5"
          pt="2"
          px="4"
          style={{ background: "var(--gray-a2)", minHeight: 500 }}
        >
          {showAboutPage ? (
            <About />
          ) : (
            <>   
                <div>
                  <GameLogic />
                </div>  
            </>   
          )
          }
          {
            currentAccount ? (
            counterId ? (
              <Counter id={counterId} />
            ) : (
              <CreateCounter
                onCreated={(id) => {
                  window.location.hash = id;
                  setCounter(id);
                }}
              />
            )
          ) : (
            <Box>
              <section className="homeImageCSS">
                <img src={homeImage} alt="Home" />
              </section>
            </Box>
          )}
        </Container>
        <footer>
          <Box>
            <center>
              <div className="centerContent2">
                <p>&copy; 2024 SUI ∞</p>
                <a href="https://www.linkedin.com/in/abhinavsharma3107/" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-linkedin linkedin-logo"></i>
                </a>
                <a href="https://www.instagram.com/abhinavsharma31_/" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-instagram instagram-logo"></i>
                </a>
              </div>
            </center>  
          </Box>  
        </footer>
      </Container>
    </>  
  );
}

export default App;