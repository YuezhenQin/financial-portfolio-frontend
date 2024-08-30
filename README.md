## ![OneInvest (1)](https://github.com/user-attachments/assets/1f050290-da3c-4eb9-82a3-0d8ec121e27e) V1.0

<!--## ![OneInvest](https://github.com/user-attachments/assets/adcab216-33d2-4fc9-b0a2-52b86feed5cf) V1.0-->


## 📚 Project Scope
OneInvest is a financial portfolio web app collecting financial data from an external service provider and allow users to view and interact with their virtual financial portofolio. 

### User Interface & Key Features
1. navigation
2. graph&chart
```
SMA_{k} = \frac{p_{n-k+1}+p_{n-k+2}+...+p_n}{k} = \frac{1}{k}\sum_{i=n-k+1}^{n}p_i
```
3. list of stocks&bonds
4. day gain&total gain
5. user profile


## 🚀Get started
### Tech Stack
* Frontend is powered by native `HTML`, `CSS`, `js` and `boostrap`.
* Backend is powered by `node.js v20.0.10` and `express.js`.
* Persistence is configured to use RDBMS MySQL.
* Testing is done with Jest.



#### Prerequisites
```
npm install npm@latest -g
```
#### Installation

#### Configuration

## 💪 People
<a href="https://github.com/yuezhenqin" target="_blank">Yuezhen Qin</a>: `front-end`, `api design`
<br>
<a href="https://github.com/yuezhenqin" target="_blank">Zihui Ouyang</a>: `data engineer`, `graph&chart design`
<br>
<a href="https://github.com/yuezhenqin" target="_blank">Shiming Jin</a>: `back-end`, `UI design`
<br>
<a href="https://github.com/yuezhenqin" target="_blank">Xiaxin Song</a>: `back-end`, `api design`, `DevOps`



## 🏗️ Process (Software Development Life Cycle) 
Agile Framework: Everyone knows what's going on; Chcek our work as we are doing it; Adjust to right direction.

Daily routine
10 minutes daily stand-up at 10:00, a brief sprint review&retropective meeting at 12:30 and 17:30 to increase speed and transparency


Day 1.
split to front-end repo, back-end repo
front-end: file structure (html, assests(css,js, img)), boostrap
back-end: 3-tier architecture (controller, services, mapper)
data-eng: data sourse (Finhub API)

Day 2.
low-fidelity prototype

API design and implementation (reach a consensus)

set up a gitproject, one place to collect all documents

## ✨ Live Demo
https://github.com/YuezhenQin/financial-portfolio-backend/blob/main/deploy.sh

## Challenge
1. 
2. state management without framework

## What we do well
1. modular mindset (two repos, individual assets/components to resolve conflict)
2. API design first, then implementation
3. Well-maintained Documentation in Github Project
4. Good Day Routine
5. Unit Tests
6. Frequent communication
7. CICD pipeline by shell script

## What can we do better
1. lack of definition of done (DoD)
2. ⚠️lack of bounds checking (valid date, valid user input, int lowbound, upbound)
3. api query limit
4. ⚠️No frontend framwork is used (no state management, no router)
5. create a user profile page

## Contributing
If you have any suggestions or improvements for the FinancialPortfolio class or its documentation, feel free to contribute. You can submit issues or pull requests to help make this project even more useful.
