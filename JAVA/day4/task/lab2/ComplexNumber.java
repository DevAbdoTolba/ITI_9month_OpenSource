public class ComplexNumber<T extends Number>{
    T real;
    T imaginary;
        
    public static void main(String[] args){
        ComplexNumber cmpx = new ComplexNumber<Integer>(1,3);
        
        System.out.println(cmpx.sub(new ComplexNumber<Integer>(1,1)));
    }
        
    public ComplexNumber(T real, T imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    
    ComplexNumber<Double> add(ComplexNumber<T> incomingComplexNumber){
        return new ComplexNumber<Double>(Double.sum(this.real.doubleValue() , incomingComplexNumber.real.doubleValue()),
                                         Double.sum(this.real.doubleValue() , incomingComplexNumber.imaginary.doubleValue()) );
    }
    
    ComplexNumber<Double> sub(ComplexNumber<T> incomingComplexNumber){
        return new ComplexNumber<Double>(Double.sum(this.real.doubleValue() , -incomingComplexNumber.real.doubleValue()),
                                         Double.sum(this.real.doubleValue() , -incomingComplexNumber.imaginary.doubleValue()) );
    }


    ComplexNumber<Double> mul(ComplexNumber<T> incomingComplexNumber){
        return new ComplexNumber<Double>(Double.sum(this.real.doubleValue() , incomingComplexNumber.real.doubleValue()),
                                         Double.sum(this.real.doubleValue() , incomingComplexNumber.imaginary.doubleValue()) );
    }
    
    ComplexNumber<Double> div(ComplexNumber<T> incomingComplexNumber){
        return new ComplexNumber<Double>(Double.sum(this.real.doubleValue() , incomingComplexNumber.real.doubleValue()),
                                         Double.sum(this.real.doubleValue() , incomingComplexNumber.imaginary.doubleValue()) );
    }
    
    ComplexNumber<Double> power(ComplexNumber<T> incomingComplexNumber){
        return new ComplexNumber<Double>(Double.sum(this.real.doubleValue() , incomingComplexNumber.real.doubleValue()),
                                         Double.sum(this.real.doubleValue() , incomingComplexNumber.imaginary.doubleValue()) );
    }
    
    
    @Override
    public String toString() {
        return real + " + i" + imaginary;
    }
}