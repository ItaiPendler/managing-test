export type Mission = {
  description: string;
  title: string;
};
export type Person = {
  name: string;
  descrption: string;
};

const missions: Mission[] = [
  { title: "משימה 1", description: "כל דבר שתרצו לעשות" },
  { title: "משימה 2", description: "כל דבר שתרצו לעשות" },
  { title: "משימה 3", description: "כל דבר שתרצו לעשות" },
  { title: "משימה 4", description: "כל דבר שתרצו לעשות" },
  { title: "משימה 5", description: "כל דבר שתרצו לעשות" },
  { title: "משימה 6", description: "כל דבר שתרצו לעשות" },
  { title: "משימה 7", description: "כל דבר שתרצו לעשות" },
  { title: "משימה 8", description: "כל דבר שתרצו לעשות" },
];

const people: Person[] = [
  {
    name: "יואב",
    descrption:
      "בן 20 מראש העין, בעל חשיבה חדשנית ויכולת לחשוב מחוץ לקופסה. מתקשה לעמוד ביעדים ולא מעט פעמים מאבד את הצפון בזמן אמת. רואה את העבודה כדרך לבטא את עצמו. חשוב לו זמן הבית שלו אבל הוא מוכן להקריב אותם מידי פעם",
  },
  {
    name: "עדי",
    descrption:
      "בת 27 מאבן יהודה, אזרחית, משכירה דירה עם בעלה הטרי יוסי. רואה בעבודה דרך להתפרנס ולא יותר. בעל ערכים משפחתיים חזקים. עושה את העבודה שלה כמו שצריך, אבל לא מחפשת להתפתח מקצועית.    ",
  },
  {
    name: "דניאל",
    descrption:
      "בן 21 מירושלים, עתודאי בוגר תואר במדעי המחשב. לא מרוצה מהשיבוץ שלו בצבא, מתעניין בחומרה וחושב שהוא מבוזבז מקצועית בצוות. יחסית חדש בצוות, מאוד חברתי ומתחיל ליזום יציאות בעצמו ",
  },
  {
    name: "נויה",
    descrption:
      "בת 23 מהוד השרון, נמצאת בצוות הרבה זמן ומכירה כמעט הכל, מחפשת אתגרים חדשים, חושבת על האזרחות הרבה. קשה לה עם המערכת הצבאית ומרגישה כלוא בה. מובילה חברתי ויוזמת יציאות צוותיות. רוב החברות שלה התקצרשו ואלה שלא נמצאות בתפקידי מפתח בצבא. ",
  },
  {
    name: "איתמר",
    descrption:
      "בן 21 מפתח תקווה, אקדמיזטור, הגיע לצוות לפני כשנה ולא התחבר חברתית, עובד טוב ומשקיע במשימות שלו. מתקשה בסיטואציות חברתיות אבל מביא ערך רב כשמתעמק בנושא. בזמן החפיפה היה לו קשה להתרכז והצוות הרגיש שהוא מורח את הזמן. ",
  },
  {
    name: "תמר",
    descrption:
      "בת 21 מזיכרון יעקב, בדרך כלל צריכה שיניעו אותה, היא מנסה להשתפר מקצועית אבל לא תמיד מצליחה. חברתית מאוד התחברה לנויה. הייתה איתך בקורס יסוד, בהתחלה היה קצת מתח פיקודי אבל נראה שבינתיים נרגע מעט.",
  },
];

export { missions, people };
