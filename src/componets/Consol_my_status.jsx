// import '../App.css'

export default function Console_my_status() {
    console.log("%cI'm looking for a job!", 'font-family:Roboto; font-size:24px; color: deepskyblue; font-weight:bold');
    console.log("%cIf you can help me, please contact me", 'font-family:Roboto; font-size:20px; color: orange; font-weight:bold');
    
    // Link to your CV or any other URL
    const cvLink = "https://drive.google.com/file/d/1ajJJMJsVw1U8qsD751E3KIjmmilxARUi/view?usp=sharing";
    console.log("%cTo download my CV, click or copy the link below:", 'font-family:Roboto; font-size:20px; color: orange; font-weight:bold');
    console.log("%c%s", 'color: blue; font-size:20px; font-weight:bold; text-decoration:underline; cursor:pointer', cvLink);
}
