import styled from "styled-components";
import AuctionItemList from "./components/AuctionItemList";

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, Helvetica, sans-serif;
`;

const Header = styled.header`
  background-color: #4b637b;
  color: white;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
`;

const MainContent = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  color: #898989;
  font-size: 12px;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <h1>Live Auction Platform</h1>
      </Header>
      <MainContent>
        <AuctionItemList
          items={[
            {
              id: 1,
              name: "Vintage Watch",
              description: "Classic timepiece from 1950s",
              startingBid: 100,
              currentBid: 100,
              bids: [],
            },
            {
              id: 2,
              name: "Art Painting",
              description: "Original Artwork in Skribble.io",
              startingBid: 150,
              currentBid: 150,
              bids: [],
            },
          ]}
          isLoading={false}
          selectedItemId={1}
          onSelectItem={() => console.log("Item selected")}
        />
      </MainContent>
      <Footer>
        <p>Demo for MLH GHW - API Week</p>
      </Footer>
    </AppContainer>
  );
}

export default App;
