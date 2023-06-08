import { useState } from "react";
import Header from "./Components/Header";
import Title from "./Components/Title";

import Summary from "./Summary";
import TableRow from "./TableRow";

import "./styles.scss";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header />
      <main>
        <Title data={"Seu carrinho"} />
        <div className="content">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <TableRow />
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td colSpan={"5"} style={{textAlign: 'center', color: '#000'}}>
                        Nenhum Produto no Carinho
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
