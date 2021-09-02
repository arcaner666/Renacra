import React from "react";
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

export default Pet;
