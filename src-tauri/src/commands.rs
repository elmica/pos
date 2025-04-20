use base64::{decode, encode, engine::general_purpose::URL_SAFE, Engine as _};
use printers;
use serde_json::json;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
pub fn test() -> String {
    println!("HELLO FROM BACK END");
    return String::from("Return..");
}

#[tauri::command(rename_all = "snake_case")]
pub fn print_base64(printer_name: &str, b64_string: &str) -> String {
    let printer = printers::get_printer_by_name(printer_name);
    if printer.is_some() {
        let document = decode(b64_string).unwrap();
        let result = printer.unwrap().print(&document, Some("CHS printjob"));
        let res_string = format!("Printed, I think: {:?}", result);
        return String::from(res_string);
    } else {
        return String::from("Cant find the printer...");
    }
}

#[tauri::command(rename_all = "snake_case")]
pub fn print_file(printer_name: &str, filepath: &str) -> String {
    let printer = printers::get_printer_by_name(printer_name);
    if printer.is_some() {
        let result = printer.unwrap().print_file(&filepath, Some("CHS printjob"));
        let res_string = format!("Printed, I think: {:?}", result);
        return String::from(res_string);
    } else {
        return String::from("Cant find the printer...");
    }
}


#[tauri::command]
pub fn list_printers() -> Vec<String> {
    let printer_array = printers::get_printers();
    let printer_array: Vec<String> = printer_array
        .into_iter()
        .map(|printer| printer.system_name)
        .collect();

    return printer_array;
}

pub fn print_test() {
    let receipt = "B@!EB



            *** Sandwich ***
========================================
Server: Jenn                   Station 3
!E                 To Go
E!7/25/2024                    10:22:07 PM
========================================
!ETime: 10:21:17 PM
E!Customer Name: TEST
----------------------------------------
!1   Pickles for Sandwiches              
!!1   Pickles for Sandwiches              
!
****************************************
!E             Ticket #: 152
E!             Order #: 60792
****************************************
!EB







m";
    println!("{}", receipt);
}
