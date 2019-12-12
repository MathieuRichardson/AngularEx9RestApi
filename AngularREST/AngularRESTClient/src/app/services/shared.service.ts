import { throwError, observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";

export const API_URL = environment.apiUrl;
export const IN_MEMORY = environment.inMemory;

export class SharedService {
  /**
   * Our errors array for holding http errors
   */
  errors: string[] = [];

 

  /**
   * Clear any errors
   */
  public clearErrors() {
    this.errors = [];
  }

  /**
   * Add handleError Http error handler code
   */
  /**
   * Http error handler
   * @param error the HttpErrorResponse from the REST API
   */
  protected handleError(error: HttpErrorResponse) {
    //We can use instanceof to check different error tyes
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      return throwError(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
  }

  protected httpOptions(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',//We are sending this to the 
        'Accept': 'application/json'
      })
    };

    return httpOptions;
  }
}
