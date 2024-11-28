"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface TarotCard {
  name: string;
  desc: string;
  image: string;
  meaning_up: string;
  meaning_rev: string;
}

const TarotCard: React.FC = () => {
  const [card, setCard] = useState<TarotCard | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCard = async () => {
    try {
      const response = await axios.get(
        "https://tarotapi.dev/api/v1/cards/random?n=1"
      );
      console.log(response.data); // Log the data received from the API
      setCard(response.data.cards[0]);
    } catch (err) {
      setError("Failed to fetch card");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCard();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {card && (
        <div>
          <h1>{card.name}</h1>
          <img src={card.image} alt={card.name} />

          <p>{card.meaning_rev}</p>
        </div>
      )}
      <button onClick={fetchCard}>Get Random Card</button>
    </div>
  );
};

export default TarotCard;
