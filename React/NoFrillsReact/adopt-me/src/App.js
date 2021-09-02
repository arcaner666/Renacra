/* global React ReactDOM */

// React.createElement() kullanarak React projesi geliştirmek artık pek kullanılmıyor.
// Bunun yerine JSX adlı araç kullanılıyor

// Fakat JSX'de arka planda içerisine yazılan kodları bu şekilde React.createElement()
// ile birlikte kullanıyor.

// React'te bir component bu şekilde tanımlanır.
// Aslında her component kendisini ve içerisindeki diğer componentleri döndürür.
// props, parent componentten gönderilen bilgiyi getiren objedir.
const Pet = (props) => {
  // React.createElement() ifadesi HTML elemanlarını oluşturmaya yarar.
  return React.createElement(
    // İlk parametreye HTML etiketinin adı yazılır.
    "div",
    // İkinci parametreye HTML özellikleri yazılır.
    {},
    // Son parametreye ise eğer varsa başka child componentler yazılır.
    [
      React.createElement("h2", {}, props.name),
      React.createElement("h3", {}, props.animal),
      React.createElement("h3", {}, props.breed),
    ]
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    ...[1, 2, 3, 4].map((i) => React.createElement("h2", {}, i)),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    }),
  ]);
};

// ReactDOM.render() istenen elemanı tarayıcıda gösterir.
// ReactDOM.render() ilk parametre olarak göstereceği componenti alır.
// ReactDOM.render() ikinci parametre olarak ise göstereceği componentin gerçek HTML
// içerisinde nereye bağlanacağını tanımlar.
ReactDOM.render(React.createElement(App), document.getElementById("root"));
