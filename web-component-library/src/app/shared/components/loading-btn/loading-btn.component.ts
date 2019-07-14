import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ILoadingBtn } from './loading-btn.model';
import { ILoadingBorder } from './loading-border.model';

@Component({
	selector: 'wcl-loading-btn',
	templateUrl: './loading-btn.component.html',
	styleUrls: ['./loading-btn.component.scss']
})
export class LoadingBtnComponent implements OnInit, OnDestroy {
	@Input() loadingBtn: ILoadingBtn;
	@Input() loadingBorder: ILoadingBorder;
	styleTag = document.createElement('style');
	styles: string;

	constructor() { }

	ngOnInit() {
		this.styleTag.type = 'text/css';
		this.styleTag.id = 'wcl-loading-btn-styles';
		this.setDefaultValues();
	}

	ngOnDestroy() {
		const element = document.getElementById('wcl-loading-btn-styles');
		element.parentNode.removeChild(element);
	}

	setDefaultValues() {
		this.loadingBorder.mainColor = this.loadingBorder.mainColor ? this.loadingBorder.mainColor : 'black';
		this.loadingBorder.subColor = this.loadingBorder.subColor ? this.loadingBorder.subColor : 'white';
		this.loadingBorder.borderSize = this.loadingBorder.borderSize ? this.loadingBorder.borderSize : '3px';
		this.loadingBorder.borderRadius = this.loadingBorder.borderRadius ? this.loadingBorder.borderRadius : '0px';

		this.createStyles();
	}

	createStyles() {
		this.styles = `@keyframes spin {
			0% {
			  background-image: linear-gradient(${this.loadingBorder.mainColor}, ${this.loadingBorder.subColor});
			}
			25% {
			  background-image: linear-gradient(to left, ${this.loadingBorder.mainColor}, ${this.loadingBorder.subColor});
			}
			50% {
			  background-image: linear-gradient(to top, ${this.loadingBorder.mainColor}, ${this.loadingBorder.subColor});
			}
			75% {
			  background-image: linear-gradient(to right, ${this.loadingBorder.mainColor}, ${this.loadingBorder.subColor});
			}
			100% {
			  background-image: linear-gradient(${this.loadingBorder.mainColor}, ${this.loadingBorder.subColor});
			}
		  }
		  
		  .wcl-loading-btn {
			  padding: ${this.loadingBorder.borderSize};
			  border-radius: ${this.loadingBorder.borderRadius};
		  }
		  `;

		this.insertIntoDom();
	}

	insertIntoDom() {
		this.styleTag.innerHTML = this.styles;
		document.getElementsByTagName('head')[0].appendChild(this.styleTag);
	}
}
