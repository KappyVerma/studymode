import "./mainPage.scss";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function MainPage({ data, isPrivateModeOn }) {
  return (
    <div className="mobile-body">
      <Header />
      {data
        .filter((d) => (isPrivateModeOn ? d.category === "studies" : true))
        .map((d, index) => (
          <div className="mobile-body__block" key={index}>
            <div className="mobile-body__group">
              <div className="mobile-body__avatar"></div>

              <div className="mobile-body__title">
                <p className="mobile-body__text">{d.group}</p>
                <p className="mobile-body__text mobile-body__text--mod">
                  Group: {d.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      <Footer />
    </div>
  );
}
