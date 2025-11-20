#include "Rect.h"
#include "Line.h"

// --- CH6 Association/Composition ---
class Picture {
    int rNum, lNum;
    Rect *pRect; // Aggregation/Association (if ptr) or Composition (if managed)
    Line *pLine;
public:
    Picture() { rNum = 0; lNum = 0; pRect = NULL; pLine = NULL; }

    void setRects(Rect *r, int n) { pRect = r; rNum = n; }
    void setLines(Line *l, int n) { pLine = l; lNum = n; }

    void paint() {
        for(int i=0; i<rNum; i++) pRect[i].draw();
        for(int i=0; i<lNum; i++) pLine[i].draw();
    }
};
