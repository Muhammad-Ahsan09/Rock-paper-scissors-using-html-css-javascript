let isAutoplay = false;
        let autoPlayId;


        document.body.addEventListener('keydown', (event)=>{
            if(event.key === 'r')
            {
                chooseWinner('rock');
            }

            else if(event.key === 'p')
            {
                chooseWinner('paper');
            }

            else if(event.key === 's')
            {
                chooseWinner('scissors');
            }
        })

        
        document.querySelector('.rock-button').addEventListener('click', ()=>{
            chooseWinner('rock');
            setScore();
        });

        document.querySelector('.paper-button').addEventListener('click',()=>{
            chooseWinner('paper');
            setScore();
        })

        document.querySelector('.scissors-button').addEventListener('click',()=>{
            chooseWinner('scissors');
            setScore();
        })

        document.querySelector('.autoplay-button').addEventListener('click', ()=>{
            if(!isAutoplay)
            {
                autoPlayId = setInterval(()=>{
                chooseWinner(pickComputerMove());
                }, 1000);

                isAutoplay = true;
            }

            else
            {
                clearInterval(autoPlayId);
                isAutoplay = false;
            }
        })
        let score = JSON.parse(localStorage.getItem('score'));

        // setScore();

        if(score === null)
        {
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            }
        }

         function pickComputerMove()
         {
            let randomNumber = Math.random();
            let computerMove = '';

            if(randomNumber >=0 && randomNumber < 1 / 3)
            {
                computerMove = 'rock';
            }

            else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3)
            {
                computerMove = 'paper';
            }

            else if(randomNumber >= 2 / 3 && randomNumber < 1)
            {
                computerMove = 'scissors';
            }

            return computerMove;
         }

         function chooseWinner(playerMove)
         {
            let computerMove = pickComputerMove();
            let result = '';
            if(playerMove === 'rock')
            {
                if(computerMove === 'rock')
                {
                    result = 'Tie';
                }

                else if(computerMove === 'paper')
                {
                    result = 'You Lose';
                }

                else if(computerMove === 'scissors')
                {
                    result = 'You Win';
                }
            }



            else if(playerMove === 'paper')
            {
                if(computerMove === 'rock')
                {
                    result = 'You Win';
                }

                else if(computerMove === 'paper')
                {
                    result = 'Tie';
                }

                else if(computerMove === 'scissors')
                {
                    result = 'You Lose';
                }
            }

            else if(playerMove === 'scissors')
            {
                if(computerMove === 'rock')
                {
                    result = 'You Lose';
                }

                else if(computerMove === 'paper')
                {
                    result = 'You Win';
                }

                else if(computerMove === 'scissors')
                {
                    result = 'Tie';
                }
            }

            if(result === 'You Win')
            {
                score.wins++;
            }

            else if(result === 'You Lose')
            {
                score.losses++;
            }

            else if(result === 'Tie')
            {
                score.ties++;
            }

            localStorage.setItem('score', JSON.stringify(score));



            let movesElement = document.querySelector('.moves');
            let resultElement = document.querySelector('.result');
            
            resultElement.innerHTML = `${result}`;
            movesElement.innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-emoji"> - <img src="images/${computerMove}-emoji.png" class="move-emoji"> Computer`; 

            setScore();
            
            
         }

         function setScore()
         {
            let scoreElement = document.querySelector('.score');
            scoreElement.innerHTML = `Wins: ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
         }