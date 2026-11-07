
# Sports World

Sports World is a responsive web application that displays live and completed cricket match scores using a public sports API. Users can select a sport, specify the number of matches, and view match details through a card-based interface.

## Features

- Fetch cricket match data from a public REST API.
- Display match scores dynamically.
- Show team names, flags, logos, and scores.
- Display match status such as Finished and Abnormal.
- Show tournament and series information.
- Select a sport using a dropdown.
- Specify the number of matches to display.
- Responsive card-based UI for different screen sizes.
- Fetch and render API data dynamically using JavaScript.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- REST API
- JSON

## API Integration

This application uses the SportScore public API to retrieve sports match information.

**API Endpoint:**

https://sportscore.com/api/widget/matches/?sport=cricket&limit=20

### API Parameters

| Parameter | Description |
|---|---|
| sport | Specifies the sport (e.g., cricket) |
| limit | Specifies the number of matches to retrieve |

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/cirilarockiaraj/sports-world
   ```

2. Navigate to the project directory.

3. Open `index.html` in your browser.

   Alternatively, use the VS Code Live Server extension.

## Project Structure

```text
Sports-World/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Application Preview

The application displays cricket match scores in responsive cards, including team information, match results, tournament details, and match status.

## Author

**Ciril Arockiaraj S**

- GitHub: https://github.com/cirilarockiaraj
- LinkedIn: https://linkedin.com/in/ciril-arockiaraj-s
