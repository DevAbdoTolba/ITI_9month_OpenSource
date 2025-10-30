
#include <iostream>
#include <vector>
#include <ctime>
#include <cstdarg>
#include <math.h>
#include <chrono>


using namespace std;





template<typename it>
it min_element(it first, it last) {
    if (first == last) return last;
    it smallest = first;
    first++;
    for (; first != last; first++) {
        if (*first < *smallest) {
            smallest = first;
        }
    }
    return smallest;
}

template<typename it>
it max_element(it first, it last) {
    if (first == last) return last;
    it largest = first;
    first++;
    for (; first != last; first++) {
        if (*first > *largest) {
            largest = first;
        }
    }
    return largest;
}

template<typename T>
void benchmarkVectorOp(const vector<T> &v, double &minMs, double &maxMs, double &avgMs){
    if(v.empty()) throw invalid_argument("benchmarkVectorOp: empty vector");

    vector<double> times;
    double sum = 0;

    for(int i=0;i<5;i++){
        auto start = chrono::high_resolution_clock::now();

        vector<T> copy = v;
        auto tmp = copy[0]; (void)tmp;

        auto end = chrono::high_resolution_clock::now();

        double ms = chrono::duration<double, milli>(end-start).count();
        sum += ms;
        times.push_back(ms);
    }

    minMs = *min_element(times.begin(), times.end());
    maxMs = *max_element(times.begin(), times.end());
    avgMs = sum/times.size();
}

void task7(){
    vector<int> vi(10000000, 42);
    vector<double> vd(10000000, 3.14);
    vector<string> vs(100000, string(100,'x'));
    // vector<string> vs(10000000, string(100,'x'));

    // Error: std::bad_alloc



    try{
        double minI,maxI,avgI;
        benchmarkVectorOp<int>(vi, minI, maxI, avgI);
        cout << "Int vector: min=" << minI << " ms, max=" << maxI << " ms, avg=" << avgI << " ms\n";

        double minD,maxD,avgD;
        benchmarkVectorOp<double>(vd, minD, maxD, avgD);
        cout << "Double vector: min=" << minD << " ms, max=" << maxD << " ms, avg=" << avgD << " ms\n";

        double minS,maxS,avgS;
        benchmarkVectorOp<string>(vs, minS, maxS, avgS);
        cout << "String vector: min=" << minS << " ms, max=" << maxS << " ms, avg=" << avgS << " ms\n";

    } catch(const exception &e){
        cout << "Error: " << e.what() << '\n';
    }
}

