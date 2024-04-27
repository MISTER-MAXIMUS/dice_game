var x = Math.floor(Math.random()*6)+1;
      var y= Math.floor(Math.random()*6)+1;
      if (x===1)
      {
        document.getElementsByClassName("img1")[0].src = "./images/dice1.png";
      }
      else if (x===2)
      {
        document.getElementsByClassName("img1")[0].src = "./images/dice2.png";
      }
      else if (x===3)
      {
        document.getElementsByClassName("img1")[0].src = "./images/dice3.png";
      }
      else if (x===4)
      {
        document.getElementsByClassName("img1")[0].src = "./images/dice4.png";
      }
      else if (x===5)
      {
        document.getElementsByClassName("img1")[0].src = "./images/dice5.png";
      }
      else{
        document.getElementsByClassName("img1")[0].src = "./images/dice6.png";
      }
      if (y===1)
      {
        document.getElementsByClassName("img2")[0].src = "./images/dice1.png";
      }
      else if (y===2)
      {
        document.getElementsByClassName("img2")[0].src = "./images/dice2.png";
      }
      else if (y===3)
      {
        document.getElementsByClassName("img2")[0].src = "./images/dice3.png";
      }
      else if (y===4)
      {
        document.getElementsByClassName("img2")[0].src = "./images/dice4.png";
      }
      else if (y===5)
      {
        document.getElementsByClassName("img2")[0].src = "./images/dice5.png";
      }
      else{
        document.getElementsByClassName("img2")[0].src = "./images/dice6.png";
      }
      if (x>y)
      {
        document.querySelector("h1").innerHTML="Player 1 Wins";
      }
      else if(x<y)
      {
        document.querySelector("h1").innerHTML="Player 2 Wins";
      }
      else
      {
        document.querySelector("h1").innerHTML="Draw";
      }