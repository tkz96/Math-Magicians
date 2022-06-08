import Header from '../components/Header';
import Calculator from '../components/Calculator';

export default function CalculatorPage() {
  return (
    <>
      <Header />
      <div className="calculator-page">
        <h2>Let&apos;s do some math!</h2>
        <Calculator />
      </div>
    </>
  );
}
