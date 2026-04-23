import { Component, effect, inject } from '@angular/core';
import { provideStreamService, StreamService } from '@webkrafters/ng-eagleeye';

@Component({
  selector: 'app-editor',
  providers: [ provideStreamService() ],
  standalone: true,
  templateUrl: './editor.html'
})
export class Editor {
  streamService = inject<StreamService>( StreamService );
  constructor() {
    effect(() => console.log( 'Editor component rendered.....' ));
  }
  updateColor( e : SubmitEvent ) { this.updateSimple( e, 'color' )  }
  updatePrice( e : SubmitEvent ) { this.updateSimple( e, 'price', true ) }
  updateType( e : SubmitEvent ) { this.updateSimple( e, 'type' ) }
  updateName( e : SubmitEvent ) {
    e.preventDefault();
    const form = new FormData( e.currentTarget as HTMLFormElement );
    this.streamService.setState({
      customer: {
        name: {
          first: form.get( 'fName' ) as string,
          last: form.get( 'lName' ) as string
        }
      }
    });
  }
  updatePhone( e : SubmitEvent ) {
    e.preventDefault();
    let phone = new FormData(
      e.currentTarget as HTMLFormElement
    ).get( 'phone' ) as string;
    if( phone.length && !/[0-9]{10}/.test( phone ) ) { return }
    phone = phone.replace( /(.{3})/, '$1-' ).replace( /(.{7})/, '$1-' );
    this.streamService.setState({ customer: { phone } });
  };
  private updateSimple( e : SubmitEvent, fieldName : string, isNumeric : boolean = false ) {
    e.preventDefault();
    const val = new FormData(
      e.currentTarget as HTMLFormElement
    ).get( fieldName );
    this.streamService.setState({ [ fieldName ]: isNumeric ? Number( val ) : val as string });
  }
}
