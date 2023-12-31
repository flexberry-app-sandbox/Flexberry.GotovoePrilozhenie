﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Gotovoe_prilozhenie
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Расход денег.
    /// </summary>
    // *** Start programmer edit section *** (РасходДенег CustomAttributes)

    // *** End programmer edit section *** (РасходДенег CustomAttributes)
    [AutoAltered()]
    [Caption("Расход денег")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РасходДенегE", new string[] {
            "ID as \'ID\'",
            "Дата as \'Дата\'",
            "Банк as \'Банк\'",
            "Счет as \'Счет\'",
            "ИНН as \'ИНН\'",
            "БИК as \'БИК\'",
            "РасходПриход as \'Расход/приход\'",
            "Тип as \'Тип\'",
            "Сумма as \'Сумма\'",
            "Финансисты as \'Финансисты\'",
            "Финансисты.ФИО as \'ФИО финансиста\'",
            "Поставщики as \'Поставщики\'",
            "Поставщики.Наименование as \'Поставщик\'"}, Hidden=new string[] {
            "Финансисты.ФИО",
            "Поставщики.Наименование"})]
    [AssociatedDetailViewAttribute("РасходДенегE", "ПереченьМат", "ПереченьМатE", true, "", "Перечень материалов", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("РасходДенегE", "Финансисты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("РасходДенегE", "Поставщики", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("РасходДенегL", new string[] {
            "ID as \'ID\'",
            "Дата as \'Дата\'",
            "Банк as \'Банк\'",
            "Счет as \'Счет\'",
            "ИНН as \'ИНН\'",
            "БИК as \'БИК\'",
            "РасходПриход as \'Расход/приход\'",
            "Тип as \'Тип\'",
            "Сумма as \'Сумма\'",
            "Финансисты.ФИО as \'ФИО финансиста\'",
            "Поставщики.Наименование as \'Поставщик\'"})]
    public class РасходДенег : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private System.DateTime fДата;
        
        private IIS.Gotovoe_prilozhenie.Банк fБанк;
        
        private int fСчет;
        
        private int fИНН;
        
        private int fБИК;
        
        private IIS.Gotovoe_prilozhenie.РасходПриход fРасходПриход;
        
        private IIS.Gotovoe_prilozhenie.Тип fТип;
        
        private double fСумма;
        
        private IIS.Gotovoe_prilozhenie.Финансисты fФинансисты;
        
        private IIS.Gotovoe_prilozhenie.Поставщики fПоставщики;
        
        private IIS.Gotovoe_prilozhenie.DetailArrayOfПереченьМат fПереченьМат;
        
        // *** Start programmer edit section *** (РасходДенег CustomMembers)

        // *** End programmer edit section *** (РасходДенег CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.ID CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.ID Get start)

                // *** End programmer edit section *** (РасходДенег.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (РасходДенег.ID Get end)

                // *** End programmer edit section *** (РасходДенег.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.ID Set start)

                // *** End programmer edit section *** (РасходДенег.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (РасходДенег.ID Set end)

                // *** End programmer edit section *** (РасходДенег.ID Set end)
            }
        }
        
        /// <summary>
        /// Банк.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.Банк CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.Банк CustomAttributes)
        public virtual IIS.Gotovoe_prilozhenie.Банк Банк
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.Банк Get start)

                // *** End programmer edit section *** (РасходДенег.Банк Get start)
                IIS.Gotovoe_prilozhenie.Банк result = this.fБанк;
                // *** Start programmer edit section *** (РасходДенег.Банк Get end)

                // *** End programmer edit section *** (РасходДенег.Банк Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.Банк Set start)

                // *** End programmer edit section *** (РасходДенег.Банк Set start)
                this.fБанк = value;
                // *** Start programmer edit section *** (РасходДенег.Банк Set end)

                // *** End programmer edit section *** (РасходДенег.Банк Set end)
            }
        }
        
        /// <summary>
        /// БИК.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.БИК CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.БИК CustomAttributes)
        public virtual int БИК
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.БИК Get start)

                // *** End programmer edit section *** (РасходДенег.БИК Get start)
                int result = this.fБИК;
                // *** Start programmer edit section *** (РасходДенег.БИК Get end)

                // *** End programmer edit section *** (РасходДенег.БИК Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.БИК Set start)

                // *** End programmer edit section *** (РасходДенег.БИК Set start)
                this.fБИК = value;
                // *** Start programmer edit section *** (РасходДенег.БИК Set end)

                // *** End programmer edit section *** (РасходДенег.БИК Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.Дата CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.Дата Get start)

                // *** End programmer edit section *** (РасходДенег.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (РасходДенег.Дата Get end)

                // *** End programmer edit section *** (РасходДенег.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.Дата Set start)

                // *** End programmer edit section *** (РасходДенег.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (РасходДенег.Дата Set end)

                // *** End programmer edit section *** (РасходДенег.Дата Set end)
            }
        }
        
        /// <summary>
        /// ИНН.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.ИНН CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.ИНН CustomAttributes)
        public virtual int ИНН
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.ИНН Get start)

                // *** End programmer edit section *** (РасходДенег.ИНН Get start)
                int result = this.fИНН;
                // *** Start programmer edit section *** (РасходДенег.ИНН Get end)

                // *** End programmer edit section *** (РасходДенег.ИНН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.ИНН Set start)

                // *** End programmer edit section *** (РасходДенег.ИНН Set start)
                this.fИНН = value;
                // *** Start programmer edit section *** (РасходДенег.ИНН Set end)

                // *** End programmer edit section *** (РасходДенег.ИНН Set end)
            }
        }
        
        /// <summary>
        /// РасходПриход.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.РасходПриход CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.РасходПриход CustomAttributes)
        public virtual IIS.Gotovoe_prilozhenie.РасходПриход РасходПриход
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.РасходПриход Get start)

                // *** End programmer edit section *** (РасходДенег.РасходПриход Get start)
                IIS.Gotovoe_prilozhenie.РасходПриход result = this.fРасходПриход;
                // *** Start programmer edit section *** (РасходДенег.РасходПриход Get end)

                // *** End programmer edit section *** (РасходДенег.РасходПриход Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.РасходПриход Set start)

                // *** End programmer edit section *** (РасходДенег.РасходПриход Set start)
                this.fРасходПриход = value;
                // *** Start programmer edit section *** (РасходДенег.РасходПриход Set end)

                // *** End programmer edit section *** (РасходДенег.РасходПриход Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.Сумма CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.Сумма Get start)

                // *** End programmer edit section *** (РасходДенег.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (РасходДенег.Сумма Get end)

                // *** End programmer edit section *** (РасходДенег.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.Сумма Set start)

                // *** End programmer edit section *** (РасходДенег.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (РасходДенег.Сумма Set end)

                // *** End programmer edit section *** (РасходДенег.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Счет.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.Счет CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.Счет CustomAttributes)
        public virtual int Счет
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.Счет Get start)

                // *** End programmer edit section *** (РасходДенег.Счет Get start)
                int result = this.fСчет;
                // *** Start programmer edit section *** (РасходДенег.Счет Get end)

                // *** End programmer edit section *** (РасходДенег.Счет Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.Счет Set start)

                // *** End programmer edit section *** (РасходДенег.Счет Set start)
                this.fСчет = value;
                // *** Start programmer edit section *** (РасходДенег.Счет Set end)

                // *** End programmer edit section *** (РасходДенег.Счет Set end)
            }
        }
        
        /// <summary>
        /// Тип.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.Тип CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.Тип CustomAttributes)
        public virtual IIS.Gotovoe_prilozhenie.Тип Тип
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.Тип Get start)

                // *** End programmer edit section *** (РасходДенег.Тип Get start)
                IIS.Gotovoe_prilozhenie.Тип result = this.fТип;
                // *** Start programmer edit section *** (РасходДенег.Тип Get end)

                // *** End programmer edit section *** (РасходДенег.Тип Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.Тип Set start)

                // *** End programmer edit section *** (РасходДенег.Тип Set start)
                this.fТип = value;
                // *** Start programmer edit section *** (РасходДенег.Тип Set end)

                // *** End programmer edit section *** (РасходДенег.Тип Set end)
            }
        }
        
        /// <summary>
        /// Расход денег.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.Поставщики CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.Поставщики CustomAttributes)
        [PropertyStorage(new string[] {
                "Поставщики"})]
        [NotNull()]
        public virtual IIS.Gotovoe_prilozhenie.Поставщики Поставщики
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.Поставщики Get start)

                // *** End programmer edit section *** (РасходДенег.Поставщики Get start)
                IIS.Gotovoe_prilozhenie.Поставщики result = this.fПоставщики;
                // *** Start programmer edit section *** (РасходДенег.Поставщики Get end)

                // *** End programmer edit section *** (РасходДенег.Поставщики Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.Поставщики Set start)

                // *** End programmer edit section *** (РасходДенег.Поставщики Set start)
                this.fПоставщики = value;
                // *** Start programmer edit section *** (РасходДенег.Поставщики Set end)

                // *** End programmer edit section *** (РасходДенег.Поставщики Set end)
            }
        }
        
        /// <summary>
        /// Расход денег.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.Финансисты CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.Финансисты CustomAttributes)
        [PropertyStorage(new string[] {
                "Финансисты"})]
        [NotNull()]
        public virtual IIS.Gotovoe_prilozhenie.Финансисты Финансисты
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.Финансисты Get start)

                // *** End programmer edit section *** (РасходДенег.Финансисты Get start)
                IIS.Gotovoe_prilozhenie.Финансисты result = this.fФинансисты;
                // *** Start programmer edit section *** (РасходДенег.Финансисты Get end)

                // *** End programmer edit section *** (РасходДенег.Финансисты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.Финансисты Set start)

                // *** End programmer edit section *** (РасходДенег.Финансисты Set start)
                this.fФинансисты = value;
                // *** Start programmer edit section *** (РасходДенег.Финансисты Set end)

                // *** End programmer edit section *** (РасходДенег.Финансисты Set end)
            }
        }
        
        /// <summary>
        /// Расход денег.
        /// </summary>
        // *** Start programmer edit section *** (РасходДенег.ПереченьМат CustomAttributes)

        // *** End programmer edit section *** (РасходДенег.ПереченьМат CustomAttributes)
        public virtual IIS.Gotovoe_prilozhenie.DetailArrayOfПереченьМат ПереченьМат
        {
            get
            {
                // *** Start programmer edit section *** (РасходДенег.ПереченьМат Get start)

                // *** End programmer edit section *** (РасходДенег.ПереченьМат Get start)
                if ((this.fПереченьМат == null))
                {
                    this.fПереченьМат = new IIS.Gotovoe_prilozhenie.DetailArrayOfПереченьМат(this);
                }
                IIS.Gotovoe_prilozhenie.DetailArrayOfПереченьМат result = this.fПереченьМат;
                // *** Start programmer edit section *** (РасходДенег.ПереченьМат Get end)

                // *** End programmer edit section *** (РасходДенег.ПереченьМат Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасходДенег.ПереченьМат Set start)

                // *** End programmer edit section *** (РасходДенег.ПереченьМат Set start)
                this.fПереченьМат = value;
                // *** Start programmer edit section *** (РасходДенег.ПереченьМат Set end)

                // *** End programmer edit section *** (РасходДенег.ПереченьМат Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РасходДенегE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасходДенегE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасходДенегE", typeof(IIS.Gotovoe_prilozhenie.РасходДенег));
                }
            }
            
            /// <summary>
            /// "РасходДенегL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасходДенегL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасходДенегL", typeof(IIS.Gotovoe_prilozhenie.РасходДенег));
                }
            }
        }
    }
}
