import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Blog de Receitas</h1>
        <p className={styles.description}>
          Um lugar onde você pode encontrar todas as suas receitas favoritas...
        </p>

        <div className={styles.grid}>
          <a
            href="https://us.kiwilimon.com/recipe/breads/bacon-and-cheese-pancake"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Bacon and Cheese Pancake</h2>
          </a>

          <a
            href="https://us.kiwilimon.com/recipe/main-dishes/mexicans/easy-chicken-gringa"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Easy Chicken Gringa</h2>
          </a>

          <a
            href="https://us.kiwilimon.com/recipe/desserts/cupcakes-recipes/animal-jelly-cupcakes"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Animal Jelly Cupcakes</h2>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
