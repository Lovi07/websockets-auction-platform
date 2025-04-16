import styled from "styled-components";
import { type AuctionItem } from "../types/auction";
import React from "react";

const ListContainer = styled.div`
  width: 30%;
  min-width: 280px;
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ListTitle = styled.h2`
  color: #2c3e50;
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #bababa;
`;

const ItemsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ItemCard = styled.li<{ selected: boolean }>`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#3498db" : "white")};
  color: ${(props) => (props.selected ? "white" : "inherit")};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ItemName = styled.h3`
  margin: 0 0 5px 0;
  font-size: 18px;
`;

const ItemDescription = styled.p`
  font-size: 12px;
  color: inherit;
`;

const ItemPrice = styled.div`
  font-weight: bold;
  color: inherit;
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 20px;
  color: #7f8c8d;
`;

type AuctionItemListProps = {
  items: AuctionItem[];
  isLoading: boolean;
  selectedItemId?: number;
  onSelectItem: (item: AuctionItem) => void;
};

const AuctionItemList: React.FC<AuctionItemListProps> = ({
  items,
  isLoading,
  selectedItemId,
  onSelectItem,
}) => {
  if (isLoading) {
    return (
      <ListContainer>
        <ListTitle>Auction Items</ListTitle>
        <LoadingSpinner>Loading items...</LoadingSpinner>
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <ListTitle>Auction Items</ListTitle>
      {items.length === 0 ? (
        <p>No auction items available</p>
      ) : (
        <ItemsList>
          {items.map((item) => (
            <ItemCard
              key={item.id}
              selected={item.id === selectedItemId}
              onClick={() => onSelectItem(item)}
            >
              <ItemName>{item.name}</ItemName>
              <ItemDescription>{item.description}</ItemDescription>
              <ItemPrice>Current Bid: £{item.currentBid}</ItemPrice>
            </ItemCard>
          ))}
        </ItemsList>
      )}
    </ListContainer>
  );
};

export default AuctionItemList;
