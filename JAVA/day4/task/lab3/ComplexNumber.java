import java.math.BigDecimal;
import java.math.RoundingMode;

public class ComplexNumber<T extends Number> {
    BigDecimal real;
    BigDecimal imaginary;

    public static void main(String[] args) {
        ComplexNumber<Integer> cmpx = new ComplexNumber<>(1, 3);
        System.out.println(cmpx);

        ComplexNumber<Double> cmpx2 = new ComplexNumber<>(1.5, 3.5);
        System.out.println(cmpx2.add(new ComplexNumber<>(1.5, 1.5)));
        System.out.println(cmpx2.mul(new ComplexNumber<>(1.5, 1.5)));
        System.out.println(cmpx2.sub(new ComplexNumber<>(1.5, 1.5)));
        System.out.println(cmpx2.div(new ComplexNumber<>(1.5, 1.5)));
    }

    public ComplexNumber(T real, T imaginary) {
        this.real = new BigDecimal(real.toString());
        this.imaginary = new BigDecimal(imaginary.toString());
    }

    ComplexNumber<BigDecimal> add(ComplexNumber<T> incomingComplexNumber) {
        return new ComplexNumber<>(
            this.real.add(incomingComplexNumber.real), 
            this.imaginary.add(incomingComplexNumber.imaginary)
        );
    }

    ComplexNumber<BigDecimal> sub(ComplexNumber<T> incomingComplexNumber) {
        return new ComplexNumber<>(
            this.real.subtract(incomingComplexNumber.real), 
            this.imaginary.subtract(incomingComplexNumber.imaginary)
        );
    }

    ComplexNumber<BigDecimal> mul(ComplexNumber<T> incomingComplexNumber) {
        return new ComplexNumber<>(
            this.real.multiply(incomingComplexNumber.real), 
            this.imaginary.multiply(incomingComplexNumber.imaginary)
        );
    }

    ComplexNumber<BigDecimal> div(ComplexNumber<T> incomingComplexNumber) {
        return new ComplexNumber<>(
            this.real.divide(incomingComplexNumber.real, RoundingMode.HALF_UP), 
            this.imaginary.divide(incomingComplexNumber.imaginary, RoundingMode.HALF_UP)
        );
    }

    @Override
    public String toString() {
        return this.real + " + " + this.imaginary + "i";
    }
}