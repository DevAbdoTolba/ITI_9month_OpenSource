#include <iostream>
#include <vector>
#include "Player.h"

using namespace std;

class Team{
  public :
    string name;
    vector<Player*> players;

    Team(string _name){
        this->name = _name;
    }

    void AddTeamMemmber (Player* p){
        this->players.push_back(p);
    }

    ~Team(){
        players.clear();
    }


};
