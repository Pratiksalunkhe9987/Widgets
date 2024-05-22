"bundle";
! function(a) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var b = a(require, exports);
        void 0 !== b && (module.exports = b)
    } else System.registerDynamic("eet.erp.count.widget/eet-countsetting.js", ["@angular/core", "eet.erp.count.widget/core.js", "eet.erp.count.widget/eet-title-setting.js"], !1, function(b, c, d) {
        return "function" == typeof a ? a.call(c, b, c, b("@angular/core"), b("eet.erp.count.widget/core.js"), b("eet.erp.count.widget/eet-title-setting.js")) : a
    })
}(function(a, b) {
    "use strict";
    Object.defineProperty(b, "__esModule", {
        value: !0
    }), b.EETCountSettingComponent = void 0;
    var c = a("@angular/core"),
        d = a("eet.erp.count.widget/core.js"),
        e = a("eet.erp.count.widget/eet-title-setting.js"),
        f = function() {
            function a() {
                this.setDefaultValues = !1, this.textStyleOptions = ["Normal", "Italic", "Bold"], this.operatorOptions = ["<=", ">="], this.methodOptions = ["EquipBackOrderNotReceieved", "EquipEscalatedBackOrder", "EquipExpectedPOs", "EquipExpectedSOs", "EquipPendingPDIonPOs", "EquipPendingPDIonSOs", "EquipQuotesToFollowUp", "EquipUnattendedSalesOrder", "FinCreditBlocks", "FinDelayedApprovalforCreditBlock", "FinDisputedInvoices", "FinFollowUpsDueToday", "FinInvoicesDue", "FinNegativeCreditBalances", "FinOverDueFollowUps", "FinPaymentsDue", "FinVendorPaymentDue", "IntAPInvoiceNotGenerated", "PartsBuyerRequest", "PartsDelayedBackOrder", "PartsDisputedInvoices", "PartsPendingPickingList", "PartsShippedNotInvoiced", "PartsStockMinInv", "PartsStockZeroInv", "PartsUnattendedBackOrder", "DemoContractDueToday", "DemoContractOverdue", "RentalContractActive", "RentalContractNotReturned", "RentalContractReadyForDelivery", "RentalContractToBeReturned", "RentalDisputedInvoices", "RentalInvOverDueNotPaid", "RentalInvScheduleToBeProcessed", "RentalCustomerInsuranceExpiringInXDays","RentalRetNotInvLines",SerActionablePlanActivities", "SerCreditBlocks", "SerDelayedPMSchedules", "SerDisputedInvoices", "SerErroneousInvoiceSchedules", "SerEstimateBlock", "SerExpiredPromiseDate", "SerFcNotAcknowledged", "SerMissedInvoiceSchedules", "SerPMSchedules"], this.disableAll = !1, this.autoId = ""
            }
            return a.prototype.ngOnInit = function() {
                this.initSettings(), this.setSettingsClosingHandler()
            }, a.prototype.initSettings = function() {
                var a = this.widgetSettingsContext.getWidgetContext(),
                    b = a.getSettings(),
                    c = a.getLanguage();
                this.company = b.get(d.SettingKey.Company), this.companyVisible = b.isSettingVisible(d.SettingKey.Company), this.companyEnabled = b.isSettingEnabled(d.SettingKey.Company), this.companyLabel = c.get("companyId"), this.LogicalId = b.get(d.SettingKey.LogicalId), this.LogicalIdVisible = b.isSettingVisible(d.SettingKey.LogicalId), this.LogicalIdEnabled = b.isSettingEnabled(d.SettingKey.LogicalId), this.LogicalIdLabel = c.get("LogicalId"), this.Method = b.get(d.SettingKey.Method), this.MethodVisible = b.isSettingVisible(d.SettingKey.Method), this.MethodEnabled = b.isSettingEnabled(d.SettingKey.Method), this.MethodLabel = c.get("Method"), this.ViewId = b.get(d.SettingKey.ViewId), this.ViewIdVisible = b.isSettingVisible(d.SettingKey.ViewId), this.ViewIdEnabled = b.isSettingEnabled(d.SettingKey.ViewId), this.ViewIdLabel = c.get("ViewId"), this.duedays = b.get(d.SettingKey.noofDays), this.duedaysLabel = c.get("DueDays"), this.TenantId = b.get(d.SettingKey.TenantId), this.TenantIdVisible = b.isSettingVisible(d.SettingKey.TenantId), this.TenantIdEnabled = b.isSettingEnabled(d.SettingKey.TenantId), this.TenantIdLabel = c.get("TenantId"), this.BDEURL = b.get(d.SettingKey.BDEURL), this.BDEURLVisible = b.isSettingVisible(d.SettingKey.BDEURL), this.BDEURLEnabled = b.isSettingEnabled(d.SettingKey.BDEURL), this.BDEURLLabel = c.get("BDEURL"), this.operator1 = b.get(d.SettingKey.operator1), this.level1 = b.get(d.SettingKey.level1), this.level1Visible = b.isSettingVisible(d.SettingKey.level1), this.level1Enabled = b.isSettingEnabled(d.SettingKey.level1), this.level1Label = c.get("level1"), this.level1Color = b.get(d.SettingKey.level1Color), this.level1ColorLabel = c.get("level1Color"), this.operator2 = b.get(d.SettingKey.operator2), this.level2 = b.get(d.SettingKey.level2), this.level2Visible = b.isSettingVisible(d.SettingKey.level2), this.level2Enabled = b.isSettingEnabled(d.SettingKey.level2), this.level2Label = c.get("level2"), this.level2Color = b.get(d.SettingKey.level2Color), this.level2ColorLabel = c.get("level2Color"), this.operator3 = b.get(d.SettingKey.operator3), this.level3 = b.get(d.SettingKey.level3), this.level3Visible = b.isSettingVisible(d.SettingKey.level3), this.level3Enabled = b.isSettingEnabled(d.SettingKey.level3), this.level3Label = c.get("level3"), this.level3Color = b.get(d.SettingKey.level3Color), this.level3ColorLabel = c.get("level3Color"), this.textStyle = b.get(d.SettingKey.Style), this.textStyleVisible = b.isSettingVisible(d.SettingKey.Style), this.textStyleEnabled = b.isSettingEnabled(d.SettingKey.Style), this.textStyleLabel = c.get("textStyleSettingLabel"), this.textColor = b.get(d.SettingKey.Color), this.textColorVisible = b.isSettingVisible(d.SettingKey.Color), this.textColorEnabled = b.isSettingEnabled(d.SettingKey.Color), this.textColorLabel = c.get("textColorSettingLabel")
            }, a.prototype.setSettingsClosingHandler = function() {
                var a = this;
                this.widgetSettingsInstance.closing = function(b) {
                    var c = a.widgetSettingsContext.getWidgetContext().getSettings();
                    b.isSave && (a.companyEnabled && (c.set(d.SettingKey.Company, a.company), c.set(d.SettingKey.BDEURL, a.BDEURL), c.set(d.SettingKey.Method, a.Method), c.set(d.SettingKey.Location, a.Location), c.set(d.SettingKey.TenantId, a.TenantId), c.set(d.SettingKey.ViewId, a.ViewId), c.set(d.SettingKey.LogicalId, a.LogicalId), c.set(d.SettingKey.noofDays, a.duedays)), a.level1Enabled && (c.set(d.SettingKey.operator1, a.operator1), c.set(d.SettingKey.level1, a.level1), c.set(d.SettingKey.level1Color, a.level1Color)), a.level2Enabled && (c.set(d.SettingKey.operator2, a.operator2), c.set(d.SettingKey.level2, a.level2), c.set(d.SettingKey.level2Color, a.level2Color)), a.level3Enabled && (c.set(d.SettingKey.operator3, a.operator3), c.set(d.SettingKey.level3, a.level3), c.set(d.SettingKey.level3Color, a.level3Color)), a.titleSettingComponent.save())
                }
            }, __decorate([c.Input(), __metadata("design:type", Object)], a.prototype, "widgetSettingsContext", void 0), __decorate([c.Input(), __metadata("design:type", Object)], a.prototype, "widgetSettingsInstance", void 0), __decorate([c.Input(), __metadata("design:type", Object)], a.prototype, "setDefaultValues", void 0), __decorate([c.Input(), __metadata("design:type", String)], a.prototype, "label", void 0), __decorate([c.ViewChild(e.EETTitleSettingComponent, {
                static: !0
            }), __metadata("design:type", e.EETTitleSettingComponent)], a.prototype, "titleSettingComponent", void 0), a = __decorate([c.Component({
                template: '\n\t\t<eet-setting-title-field\n\t\t\t[widgetSettingsContext]="widgetSettingsContext"\n\t\t\tlabel="Title">\n\t\t</eet-setting-title-field>\n\t\t<div>\n\t\t\t<div class="ten columns" *ngIf="companyVisible">\n\t\t\t\t<label width:100px></label>\n\t\t\t\t<label soho-label [required]="true">{{companyLabel}}</label>\n\t\t\t\t<input soho-input [(ngModel)]="company" [disabled]="!companyEnabled"/>\n\t\t\t</div>\n\n\t\t\t<div class="ten columns" *ngIf="LogicalIdVisible">\n\t\t\t\t<label></label>\n\t\t\t\t<label soho-label [required]="true">{{LogicalIdLabel}}</label>\n\t\t\t\t<input soho-input [(ngModel)]="LogicalId" [disabled]="!LogicalIdEnabled"/>\n\t\t\t</div>\n\n\t\t\t<div class="ten columns" *ngIf="MethodVisible">\n\t\t\t\t<label></label>\n\t\t\t\t<label soho-label [required]="true">{{MethodLabel}}</label>\n\t\t\t\t<select soho-dropdown [(ngModel)]="Method" [disabled]="!MethodEnabled" noSearch>\n\t\t\t\t\t\t<option *ngFor="let methodOption of methodOptions" [value]="methodOption">{{methodOption}}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class="row" *ngIf="level1Visible">\n\t\t\t\t<div class="two columns">\n\t\t\t\t\t<label>{{level1Label}}</label>\n\t\t\t\t\t<select soho-dropdown [(ngModel)]="operator1" [disabled]="!level1Enabled" noSearch>\n\t\t\t\t\t\t<option *ngFor="let operatorOption of operatorOptions" [value]="operatorOption">{{operatorOption}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class="two columns">\n\t\t\t\t\t<label></label>\n\t\t\t\t\t<input soho-input [(ngModel)]="level1" [disabled]="!level1Enabled"/>\n\t\t\t\t</div>\n\t\t\t\t<div class="three columns">\n\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t<input soho-colorpicker [(ngModel)]="level1Color" [disabled]="!level1Enabled"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="row" *ngIf="level2Visible">\n\t\t\t\t<div class="two columns">\n\t\t\t\t\t<label>{{level2Label}}</label>\n\t\t\t\t\t<select soho-dropdown [(ngModel)]="operator2" [disabled]="!level2Enabled" noSearch>\n\t\t\t\t\t\t<option *ngFor="let operatorOption of operatorOptions" [value]="operatorOption">{{operatorOption}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class="two columns">\n\t\t\t\t\t<label></label>\n\t\t\t\t\t<input soho-input [(ngModel)]="level2" [disabled]="!level2Enabled"/>\n\t\t\t\t</div>\n\t\t\t\t<div class="three columns">\n\t\t\t\t\t<label></label>\n\t\t\t\t\t<input soho-colorpicker [(ngModel)]="level2Color" [disabled]="!level2Enabled"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="row" *ngIf="level3Visible">\n\t\t\t\t<div class="two columns">\n\t\t\t\t\t<label>{{level3Label}}</label>\n\t\t\t\t\t<select soho-dropdown [(ngModel)]="operator3" [disabled]="!level3Enabled" noSearch>\n\t\t\t\t\t\t<option *ngFor="let operatorOption of operatorOptions" [value]="operatorOption">{{operatorOption}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class="two columns">\n\t\t\t\t\t<label></label>\n\t\t\t\t\t<input soho-input [(ngModel)]="level3" [disabled]="!level3Enabled"/>\n\t\t\t\t</div>\n\t\t\t\t<div class="three columns">\n\t\t\t\t\t<label></label>\n\t\t\t\t\t<input soho-colorpicker [(ngModel)]="level3Color" [disabled]="!level3Enabled"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="ten columns" *ngIf="Method == \'FinVendorPaymentDue\' || Method == \'FinTaxExemptionExpiringInXDays\' || Method == \'RentalCustomerInsuranceExpiringInXDays\'">\n\t\t\t\t<label></label>\n\t\t\t\t<label soho-label [required]="true">{{duedaysLabel}}</label>\n\t\t\t\t<input soho-input [(ngModel)]="duedays"/>\n\t\t\t</div>\n\n\t\t\t<div class="ten columns" *ngIf="ViewIdVisible">\n\t\t\t\t<label></label>\n\t\t\t\t<label soho-label [required]="true">{{ViewIdLabel}}</label>\n\t\t\t\t<input soho-input [(ngModel)]="ViewId" [disabled]="!ViewIdEnabled"/>\n\t\t\t</div>\n\n\t\t\t<div class="ten columns" *ngIf="TenantIdVisible">\n\t\t\t\t<label></label>\n\t\t\t\t<label soho-label [required]="true">{{TenantIdLabel}}</label>\n\t\t\t\t<input soho-input [(ngModel)]="TenantId" [disabled]="!TenantIdEnabled"/>\n\t\t\t</div>\n\n\t\t\t<div class="ten columns" *ngIf="BDEURLVisible">\n\t\t\t\t<label></label>\n\t\t\t\t<label soho-label [required]="true">{{BDEURLLabel}}</label>\n\t\t\t\t<input soho-input [(ngModel)]="BDEURL" [disabled]="!BDEURLEnabled"/>\n\t\t\t</div>\n\t\t</div>\n\t'
            })], a)
        }();
    b.EETCountSettingComponent = f
}),
function(a) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var b = a(require, exports);
        void 0 !== b && (module.exports = b)
    } else System.registerDynamic("eet.erp.count.widget/eet-title-setting.js", ["@angular/core"], !1, function(b, c, d) {
        return "function" == typeof a ? a.call(c, b, c, b("@angular/core")) : a
    })
}(function(a, b) {
    "use strict";
    Object.defineProperty(b, "__esModule", {
        value: !0
    }), b.EETTitleSettingComponent = void 0;
    var c = a("@angular/core"),
        d = function() {
            function a() {}
            return Object.defineProperty(a.prototype, "lockIcon", {
                get: function() {
                    return this.isTitleLocked ? "locked" : "unlocked"
                },
                enumerable: !1,
                configurable: !0
            }), a.prototype.ngOnInit = function() {
                var a = this.widgetSettingsContext.getWidgetContext();
                this.isTitleEditEnabled = a.isTitleEditEnabled(), this.isTitleLocked = a.isTitleLocked(), this.title = a.getResolvedTitle(this.isTitleLocked), this.isTitleUnlockable = a.isTitleUnlockable()
            }, a.prototype.save = function() {
                var a = this.widgetSettingsContext.getWidgetContext();
                a.setTitleLocked(this.isTitleLocked), this.isTitleEditEnabled && a.setTitle(this.title)
            }, a.prototype.onLockClicked = function() {
                this.isTitleLocked = !this.isTitleLocked, this.isTitleLocked && (this.title = this.widgetSettingsContext.getWidgetContext().getStandardTitle())
            }, __decorate([c.Input(), __metadata("design:type", Object)], a.prototype, "widgetSettingsContext", void 0), __decorate([c.Input(), __metadata("design:type", String)], a.prototype, "label", void 0), a = __decorate([c.Component({
                selector: "eet-setting-title-field",
                template: '\n\t<div class="ten columns">\n\t\t<label *ngIf="label">{{label}}</label>\n\t\t<input [readOnly]="!isTitleEditEnabled || isTitleLocked" [(ngModel)]="title" />\n\t\t<button\n\t\t\tsoho-button="icon"\n\t\t\t[icon]="lockIcon"\n\t\t\t[disabled]="!isTitleUnlockable"\n\t\t\t(click)="onLockClicked()">\n\t\t</button>\n\t</div>\n\t'
            })], a)
        }();
    b.EETTitleSettingComponent = d
}),
function(a) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var b = a(require, exports);
        void 0 !== b && (module.exports = b)
    } else System.registerDynamic("eet.erp.count.widget/core.js", [], !1, function(b, c, d) {
        return "function" == typeof a ? a.call(c, b, c) : a
    })
}(function(a, b) {
    "use strict";
    Object.defineProperty(b, "__esModule", {
        value: !0
    }), b.SettingKey = void 0;
    ! function(a) {
        a.Company = "company", a.LogicalId = "LogicalId", a.Method = "Method", a.Location = "Location", a.ViewId = "ViewId", a.TenantId = "TenantId", a.BDEURL = "BDEURL", a.Color = "textColor", a.Style = "textStyle", a.level1 = "level1", a.level2 = "level2", a.level3 = "level3", a.level1Color = "level1Color", a.level2Color = "level2Color", a.level3Color = "level3Color", a.operator1 = "operator1", a.operator2 = "operator2", a.operator3 = "operator3", a.noofDays = "noofdays"
    }(b.SettingKey || (b.SettingKey = {}))
}),
function(a) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var b = a(require, exports);
        void 0 !== b && (module.exports = b)
    } else System.registerDynamic("eet.erp.count.widget/service.js", ["@angular/core", "lime", "eet.erp.count.widget/core.js"], !1, function(b, c, d) {
        return "function" == typeof a ? a.call(c, b, c, b("@angular/core"), b("lime"), b("eet.erp.count.widget/core.js")) : a
    })
}(function(a, b) {
    "use strict";
    Object.defineProperty(b, "__esModule", {
        value: !0
    }), b.EETCountService = void 0;
    var c = a("@angular/core"),
        d = a("lime"),
        e = a("eet.erp.count.widget/core.js"),
        f = function() {
            function a(a) {
                var b = this;
                this.widgetContext = a, this.getCount = function(a) {
                    b.setBusy(!0);
                    var c = b.createRequest();
                    b.widgetContext.executeIonApiAsync(c).subscribe(function(c) {
                        b.countRecords = $(c.data).find("WorkloadItems").children("item").children("count").text().toString(), b.setBusy(!1), a(b.countRecords)
                    }, function(a) {
                        b.showErrorMessage(a)
                    })
                }
            }
            return a.prototype.createRequest = function() {
                var a = "",
                    b = this.widgetContext.getSettings().get(e.SettingKey.Method);
                if (null != b && "" !== b.trim()) {
                    if ("FinVendorPaymentDue" === b) {
                        var c = this.widgetContext.getSettings().get(e.SettingKey.noofDays);
                        void 0 === c && (c = 0), a = "<amount>" + c.toString() + "</amount>"
                    }
                    if ("RentalCustomerInsuranceExpiringInXDays" === b) {
                        var c = this.widgetContext.getSettings().get(e.SettingKey.noofDays);
                        void 0 === c && (c = 0), a = "<amount>" + c.toString() + "</amount>"
                    }
					if ("FinTaxExemptionExpiringInXDays" === b) {
                        var c = this.widgetContext.getSettings().get(e.SettingKey.noofDays);
                        void 0 === c && (c = 0), a = "<amount>" + c.toString() + "</amount>"
                    }
                    var d = this.widgetContext.getSettings().get(e.SettingKey.Company);
                    b = b.charAt(0).toLowerCase() + b.slice(1);
                    var f = '<?xml version="1.0" encoding="utf-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://www.infor.com/businessinterface/WorkloadItems"><soapenv:Header><ser:Activation><company>' + d.trim() + "</company></ser:Activation></soapenv:Header><soapenv:Body><ser:" + b + "><CreateRequest><ControlArea><processingScope>request</processingScope></ControlArea><DataArea><WorkloadItems><id>1</id>" + a.trim() + "</WorkloadItems></DataArea></CreateRequest></ser:" + b + "></soapenv:Body></soapenv:Envelope>";
                    return {
                        method: "POST",
                        url: this.widgetContext.getSettings().get(e.SettingKey.BDEURL),
                        data: f,
                        cache: !1,
                        responseType: "text/xml",
                        ionApiRetry: !0,
                        headers: {
                            "Content-Type": 'text/xml; charset="utf-8"'
                        }
                    }
                }
            }, a.prototype.setBusy = function(a) {
                this.widgetContext.setState(a ? d.WidgetState.busy : d.WidgetState.running)
            }, a.prototype.showErrorMessage = function(a) {
                d.Log.error("ION API Error: " + a), this.widgetContext.showWidgetMessage({
                    type: d.WidgetMessageType.Error,
                    message: "Unable to load data. Please contact e-Emphasys support"
                }), this.setBusy(!1)
            }, a = __decorate([c.Injectable(), __param(0, c.Inject(d.widgetContextInjectionToken)), __metadata("design:paramtypes", [d.IWidgetContext])], a)
        }();
    b.EETCountService = f
}),
function(a) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var b = a(require, exports);
        void 0 !== b && (module.exports = b)
    } else System.registerDynamic("eet.erp.count.widget/main.js", ["@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular", "lime", "eet.erp.count.widget/core.js", "eet.erp.count.widget/eet-countsetting.js", "eet.erp.count.widget/eet-title-setting.js", "eet.erp.count.widget/service.js"], !1, function(b, c, d) {
        return "function" == typeof a ? a.call(c, b, c, b("@angular/common"), b("@angular/core"), b("@angular/forms"), b("@infor/sohoxi-angular"), b("lime"), b("eet.erp.count.widget/core.js"), b("eet.erp.count.widget/eet-countsetting.js"), b("eet.erp.count.widget/eet-title-setting.js"), b("eet.erp.count.widget/service.js")) : a
    })
}(function(a, b) {
    "use strict";
    Object.defineProperty(b, "__esModule", {
        value: !0
    }), b.EETCountModule = b.EETCountComponent = void 0;
    var c = a("@angular/common"),
        d = a("@angular/core"),
        e = a("@angular/forms"),
        f = a("@infor/sohoxi-angular"),
        g = a("lime"),
        h = a("eet.erp.count.widget/core.js"),
        i = a("eet.erp.count.widget/eet-countsetting.js"),
        j = a("eet.erp.count.widget/eet-title-setting.js"),
        k = a("eet.erp.count.widget/service.js"),
        l = function() {
            function a(a) {
                this.service = a
            }
            return a.prototype.ngOnInit = function() {
                var a = this;
                this.setEventHandlers(), this.isConfigured() && this.updatecontent(), this.widgetInstance.refreshed = function(b) {
                    a.isConfigured() && a.updatecontent()
                }, this.widgetInstance.settingsSaved = function() {
                    a.isConfigured() && a.updatecontent()
                }
            }, a.prototype.openDrillback = function() {
                switch (this.widgetContext.getSettings().get(h.SettingKey.Method)) {
                    case "RentalContractActive":
                    case "RentalCustomerInsuranceExpiringInXDays":
					case "FinTaxExemptionExpiringInXDays":
					case "RentalRetNotInvLines":
                        var a = this.widgetContext.getSettings().get(h.SettingKey.LogicalId) + "?LogicalId=" + this.widgetContext.getSettings().get(h.SettingKey.LogicalId) + "&ID1=" + this.widgetContext.getSettings().get(h.SettingKey.Method) + "&AccountingEntity=" + this.widgetContext.getSettings().get(h.SettingKey.Company) + "&Location=dummy&ViewId=" + this.widgetContext.getSettings().get(h.SettingKey.ViewId) + "&TenantId=" + this.widgetContext.getSettings().get(h.SettingKey.TenantId) + "&NoOfDays=" + this.widgetContext.getSettings().get(h.SettingKey.noofDays);
                        this.widgetContext.launch({
                            resolve: !0,
                            url: a
                        });
                        break;
                    default:
                        var a = this.widgetContext.getSettings().get(h.SettingKey.LogicalId) + "?LogicalId=" + this.widgetContext.getSettings().get(h.SettingKey.LogicalId) + "&ID1=" + this.widgetContext.getSettings().get(h.SettingKey.Method) + "&AccountingEntity=" + this.widgetContext.getSettings().get(h.SettingKey.Company) + "&Location=dummy&ViewId=" + this.widgetContext.getSettings().get(h.SettingKey.ViewId) + "&TenantId=" + this.widgetContext.getSettings().get(h.SettingKey.TenantId);
                        this.widgetContext.launch({
                            resolve: !0,
                            url: a
                        })
                }
            }, a.prototype.updatecontent = function() {
                var a = this,
                    b = "#000000";
                this.service.getCount(function(c) {
                    a.count = c, a.cntxt = a.canvas.nativeElement.getContext("2d"), a.cntxt.clearRect(0, 0, a.canvas.nativeElement.width, a.canvas.nativeElement.height), a.cntxt.beginPath(), a.cntxt.arc(140, 140, 100, 0, 2 * Math.PI, !1), a.cntxt.font = "bold 30pt Calibri", a.cntxt.textAlign = "center", a.cntxt.lineWidth = 10, b = a.conditonsatisfied(a.widgetContext.getSettings().get(h.SettingKey.operator1), parseInt(a.widgetContext.getSettings().get(h.SettingKey.level1).replace(",", "")), parseInt(a.count.replace(",", ""))) ? a.widgetContext.getSettings().get(h.SettingKey.level1Color) : a.conditonsatisfied(a.widgetContext.getSettings().get(h.SettingKey.operator2), parseInt(a.widgetContext.getSettings().get(h.SettingKey.level2).replace(",", "")), parseInt(a.count.replace(",", ""))) ? a.widgetContext.getSettings().get(h.SettingKey.level2Color) : a.conditonsatisfied(a.widgetContext.getSettings().get(h.SettingKey.operator3), parseInt(a.widgetContext.getSettings().get(h.SettingKey.level3).replace(",", "")), parseInt(a.count.replace(",", ""))) ? a.widgetContext.getSettings().get(h.SettingKey.level3Color) : "#000000", a.color = b, a.cntxt.strokeStyle = b, a.cntxt.fillStyle = b, a.cntxt.fillText(c, 140, 140), a.cntxt.stroke()
                })
            }, a.prototype.isConfigured = function() {
                var a;
                return null != (a = this.widgetContext.getSettings().get(h.SettingKey.Method)) && "" !== a
            }, a.prototype.conditonsatisfied = function(a, b, c) {
                switch (a) {
                    case "<=":
                        if (c <= b) return !0;
                        break;
                    case ">=":
                        if (c >= b) return !0
                }
                return !1
            }, a.prototype.setEventHandlers = function() {
                var a = this;
                this.widgetInstance.restored = function() {
                    return a.widgetContext.setStandardTitle()
                }, this.widgetInstance.settingsSaved = function() {
                    return a.updatecontent()
                }, this.widgetInstance.widgetSettingsFactory = function() {
                    return {
                        angularConfig: {
                            componentType: i.EETCountSettingComponent
                        }
                    }
                }
            }, __decorate([d.Input(), __metadata("design:type", g.IWidgetContext)], a.prototype, "widgetContext", void 0), __decorate([d.Input(), __metadata("design:type", g.IWidgetInstance)], a.prototype, "widgetInstance", void 0), __decorate([d.ViewChild("canvas", {
                static: !0
            }), __metadata("design:type", d.ElementRef)], a.prototype, "canvas", void 0), a = __decorate([d.Component({
                providers: [k.EETCountService],
                template: '\n\t<div (click) = "openDrillback()">\n\t\t\t<canvas #canvas width="280" height="280"></canvas>\n\t</div>\n\t',
                styles: ["\n\t:host-context(.lm-theme-dark) div {\n\t\tbackground-color: rgba(255,255,255,0.7);\n\t\t}\n\t\tcanvas\n\t\t{\n\t\t\tdisplay:block;\n\t\t\tmargin-left:auto;\n\t\t\tmargin-right:auto;\n\t\t}\n\t"]
            }), __metadata("design:paramtypes", [k.EETCountService])], a)
        }();
    b.EETCountComponent = l;
    var m = function() {
        function a() {}
        return a = __decorate([d.NgModule({
            imports: [c.CommonModule, e.FormsModule, f.SohoButtonModule, f.SohoBusyIndicatorModule, f.SohoDropDownModule, f.SohoColorPickerModule, f.SohoComponentsModule],
            declarations: [l, i.EETCountSettingComponent, j.EETTitleSettingComponent],
            entryComponents: [l, i.EETCountSettingComponent, j.EETTitleSettingComponent]
        })], a)
    }();
    b.EETCountModule = m
}),
function(a) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var b = a(require, exports);
        void 0 !== b && (module.exports = b)
    } else System.registerDynamic("eet.erp.count.widget.widget", ["eet.erp.count.widget/core.js", "eet.erp.count.widget/main.js"], !1, function(b, c, d) {
        return "function" == typeof a ? a.call(c, b, c, b("eet.erp.count.widget/core.js"), b("eet.erp.count.widget/main.js")) : a
    })
}(function(a, b) {
    "use strict";
    Object.defineProperty(b, "__esModule", {
        value: !0
    }), b.widgetFactory = void 0;
    var c = a("eet.erp.count.widget/core.js"),
        d = a("eet.erp.count.widget/main.js"),
        e = function(a) {
            return {
                angularConfig: {
                    moduleType: d.EETCountModule,
                    componentType: d.EETCountComponent
                },
                isConfigured: function() {
                    return !!a.getSettings().get(c.SettingKey.Method)
                }
            }
        };
    b.widgetFactory = e
});