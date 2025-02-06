import React, { useState } from "react";
import './destinations.css';

const destinationsData = [
  {
    id: 1,
    name: "Мальдивы",
    category: "Море",
    image: "/assets/maldives.jpg",
    description: "Райские острова с белоснежными пляжами и прозрачной водой.",
  },
  {
    id: 2,
    name: "Альпы",
    category: "Горы",
    image: "/assets/alps.jpg",
    description: "Лучшее место для любителей горнолыжного отдыха и природы.",
  },
  {
    id: 3,
    name: "Париж",
    category: "Города",
    image: "/assets/paris.jpg",
    description: "Город любви, искусства и знаменитой Эйфелевой башни.",
  },
  {
    id: 4,
    name: "Бали",
    category: "Море",
    image: "/assets/bali.jpg",
    description: "Тропический рай с потрясающей природой и культурой.",
  },
  {
    id: 5,
    name: "Непал",
    category: "Горы",
    image: "/assets/nepal.jpg",
    description: "Дом Эвереста и духовных традиций Азии.",
  },
  {
    id: 6,
    name: "Токио",
    category: "Города",
    image: "/assets/tokyo.jpg",
    description: "Современный мегаполис с традиционными храмами и технологиями.",
  },
];

const categories = ["Все", "Море", "Горы", "Города"];

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [visibleCount, setVisibleCount] = useState(3); // Сколько направлений показывать

  const filteredDestinations =
    selectedCategory === "Все"
      ? destinationsData
      : destinationsData.filter((destination) => destination.category === selectedCategory);

  return (
    <div className="destinations">
      <div className="container">
        <h1 className="title">Популярные направления</h1>
        <p className="description">
          Выберите идеальное место для путешествия по вашему вкусу.
        </p>

        {/* Фильтр по категориям */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Карточки направлений */}
        <div className="destination-grid">
          {filteredDestinations.slice(0, visibleCount).map((destination) => (
            <div className="destination-card" key={destination.id}>
              <img src={destination.image} alt={destination.name} className="destination-image" />
              <div className="destination-info">
                <h3 className="destination-name">{destination.name}</h3>
                <p className="destination-description">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "Показать больше" */}
        {visibleCount < filteredDestinations.length && (
          <button className="load-more" onClick={() => setVisibleCount(visibleCount + 3)}>
            Показать больше
          </button>
        )}
      </div>
    </div>
  );
};

export default Destinations;










