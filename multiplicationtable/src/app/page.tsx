const Tabuada: React.FC = () => {
  const tabuada = () => {
    const num = document.getElementById('txtn') as HTMLInputElement;
    const tab = document.getElementById('seltab') as HTMLSelectElement;
    if (num.value.length === 0) {
      alert('Digite um número, por favor');
    } else {
      const n = Number(num.value);
      let c = 1;
      tab.innerHTML = '';
      while (c <= 10) {
        const item = document.createElement('option');
        item.text = `${n} x ${c} = ${n * c}`;
        tab.appendChild(item);
        c++;
      }
    }
  };

  return (
    <body>
      <section className="bg-white rounded-[10px] p-4 w-[500px] m-auto shadow-[5px_5px_10px_black]">
        <div>
          <p>
            Número:
            <input type="number" name="num" id="txtn" />
            <input type="button" value="Gerar Tabuada" onClick={tabuada} />
          </p>
        </div>
        <div>
          <select name="tabuada" id="seltab" size={10}>
            <option>Digite um número acima</option>
          </select>
        </div>
      </section>
      <footer className="text-white text-center italic">
        <p>&copy; Curso em video</p>
      </footer>
    </body>
  );
};

export default Tabuada;