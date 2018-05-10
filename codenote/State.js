class State
{
  constructor()
  {
    this.stateTable = {};
    this.state = 0;
  }
  change(stateName)
  {
    this.state = this.stateTable[stateName];
  }
  priorityChange(stateName)
  {
    this.state = Math.max(this.state ,this.stateTable[stateName]);
  }
  getState()
  {
    return this.state;
  }
}

class UpdateState extends State
{
  constructor()
  {
    super();
    this.stateTable = {
      "init":0,
      "exec":1,
      "finish":2,
      "error":3
    }
  }
  
  end()
  {
    return (this.state ==2 ||this.state ==3);
  }
}
