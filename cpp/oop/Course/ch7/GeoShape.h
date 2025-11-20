class GeoShape {
protected: // Protected inheritance access
    double dim1, dim2;
public:
    GeoShape(double d1, double d2) : dim1(d1), dim2(d2) {}
    void setDim1(double d) { dim1 = d; }
    void setDim2(double d) { dim2 = d; }
    double getDim1() { return dim1; }
    double getDim2() { return dim2; }
};
