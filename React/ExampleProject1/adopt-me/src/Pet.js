// React.createElement() kullanarak React projesi geliştirmek artık pek kullanılmıyor.
// Bunun yerine JSX adlı araç kullanılıyor

// Fakat JSX'de arka planda içerisine yazılan kodları bu şekilde React.createElement()
// ile birlikte kullanıyor.

// React'te bir component bu şekilde tanımlanır.
// Aslında her component kendisini ve içerisindeki diğer componentleri döndürür.
// props, parent componentten gönderilen bilgiyi getiren objedir.
// React.createElement() ifadesi HTML elemanlarını oluşturmaya yarar.
// İlk parametreye HTML etiketinin adı yazılır.
// İkinci parametreye HTML özellikleri yazılır.
// Son parametreye ise eğer varsa başka child componentler yazılır.

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

// Burada ise üstteki Pet componentini JSX kullanarak yazıyoruz.
// İki component de birbirinin birebir aynısı fakat alttaki componentte JSX sayesinde
// çok kısa bir şekilde, kafamız karışmadan kodlarımızı yazabiliyoruz.
const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.animal}</h3>
      <h3>{props.breed}</h3>
    </div>
  );
};

export default Pet;
