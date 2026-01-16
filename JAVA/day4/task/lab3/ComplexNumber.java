public class ComplexNumber<T extends Number> {
    Double real;
    Double imaginary;

    public static void main(String[] args) {
        ComplexNumber<Integer> cmpx = new ComplexNumber<>(1, 3);
        System.out.println(cmpx.sub(new ComplexNumber<>(1, 1)));

        ComplexNumber<Double> cmpx2 = new ComplexNumber<>(1.5, 3.5);
        System.out.println(cmpx2.add(new ComplexNumber<>(1.5, 1.5)));
    }

    public ComplexNumber(Double real, Double imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    
    public ComplexNumber(T real, T imaginary) {
        this(real.doubleValue(), imaginary.doubleValue());
    }

    ComplexNumber<T> add(ComplexNumber<T> incomingComplexNumber) {
        return new ComplexNumber<>(
            this.real + incomingComplexNumber.real,
            this.imaginary + incomingComplexNumber.imaginary
        );
    }

    ComplexNumber<T> sub(ComplexNumber<T> incomingComplexNumber) {
        return new ComplexNumber<>(
            this.real - incomingComplexNumber.real,
            this.imaginary - incomingComplexNumber.imaginary
        );
    }

    ComplexNumber<T> mul(ComplexNumber<T> incomingComplexNumber) {
        return new ComplexNumber<>(
            this.real * incomingComplexNumber.real,
            this.imaginary * incomingComplexNumber.imaginary
        );
    }

    ComplexNumber<T> div(ComplexNumber<T> incomingComplexNumber) {
        return new ComplexNumber<>(
            this.real / incomingComplexNumber.real,
            this.imaginary / incomingComplexNumber.imaginary
        );
    }

    @Override
    public String toString() {
        return this.real + " + " + this.imaginary + "i";
    }   
}