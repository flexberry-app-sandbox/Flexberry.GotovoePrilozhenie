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
    /// Поставщики.
    /// </summary>
    // *** Start programmer edit section *** (Поставщики CustomAttributes)

    // *** End programmer edit section *** (Поставщики CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПоставщикиE", new string[] {
            "ID as \'ID\'",
            "Наименование as \'Наименование\'",
            "НомерТелефона as \'Номер телефона\'",
            "Адрес as \'Адрес\'",
            "Почта as \'Почта\'"})]
    [View("ПоставщикиL", new string[] {
            "ID as \'ID\'",
            "Наименование as \'Наименование\'",
            "НомерТелефона as \'Номер телефона\'",
            "Адрес as \'Адрес\'",
            "Почта as \'Почта\'"})]
    public class Поставщики : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private string fНаименование;
        
        private int fНомерТелефона;
        
        private string fАдрес;
        
        private string fПочта;
        
        // *** Start programmer edit section *** (Поставщики CustomMembers)

        // *** End programmer edit section *** (Поставщики CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (Поставщики.ID CustomAttributes)

        // *** End programmer edit section *** (Поставщики.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (Поставщики.ID Get start)

                // *** End programmer edit section *** (Поставщики.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (Поставщики.ID Get end)

                // *** End programmer edit section *** (Поставщики.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Поставщики.ID Set start)

                // *** End programmer edit section *** (Поставщики.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (Поставщики.ID Set end)

                // *** End programmer edit section *** (Поставщики.ID Set end)
            }
        }
        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Поставщики.Адрес CustomAttributes)

        // *** End programmer edit section *** (Поставщики.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Поставщики.Адрес Get start)

                // *** End programmer edit section *** (Поставщики.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Поставщики.Адрес Get end)

                // *** End programmer edit section *** (Поставщики.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Поставщики.Адрес Set start)

                // *** End programmer edit section *** (Поставщики.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Поставщики.Адрес Set end)

                // *** End programmer edit section *** (Поставщики.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Поставщики.Наименование CustomAttributes)

        // *** End programmer edit section *** (Поставщики.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Поставщики.Наименование Get start)

                // *** End programmer edit section *** (Поставщики.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Поставщики.Наименование Get end)

                // *** End programmer edit section *** (Поставщики.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Поставщики.Наименование Set start)

                // *** End programmer edit section *** (Поставщики.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Поставщики.Наименование Set end)

                // *** End programmer edit section *** (Поставщики.Наименование Set end)
            }
        }
        
        /// <summary>
        /// НомерТелефона.
        /// </summary>
        // *** Start programmer edit section *** (Поставщики.НомерТелефона CustomAttributes)

        // *** End programmer edit section *** (Поставщики.НомерТелефона CustomAttributes)
        public virtual int НомерТелефона
        {
            get
            {
                // *** Start programmer edit section *** (Поставщики.НомерТелефона Get start)

                // *** End programmer edit section *** (Поставщики.НомерТелефона Get start)
                int result = this.fНомерТелефона;
                // *** Start programmer edit section *** (Поставщики.НомерТелефона Get end)

                // *** End programmer edit section *** (Поставщики.НомерТелефона Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Поставщики.НомерТелефона Set start)

                // *** End programmer edit section *** (Поставщики.НомерТелефона Set start)
                this.fНомерТелефона = value;
                // *** Start programmer edit section *** (Поставщики.НомерТелефона Set end)

                // *** End programmer edit section *** (Поставщики.НомерТелефона Set end)
            }
        }
        
        /// <summary>
        /// Почта.
        /// </summary>
        // *** Start programmer edit section *** (Поставщики.Почта CustomAttributes)

        // *** End programmer edit section *** (Поставщики.Почта CustomAttributes)
        [StrLen(255)]
        public virtual string Почта
        {
            get
            {
                // *** Start programmer edit section *** (Поставщики.Почта Get start)

                // *** End programmer edit section *** (Поставщики.Почта Get start)
                string result = this.fПочта;
                // *** Start programmer edit section *** (Поставщики.Почта Get end)

                // *** End programmer edit section *** (Поставщики.Почта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Поставщики.Почта Set start)

                // *** End programmer edit section *** (Поставщики.Почта Set start)
                this.fПочта = value;
                // *** Start programmer edit section *** (Поставщики.Почта Set end)

                // *** End programmer edit section *** (Поставщики.Почта Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПоставщикиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПоставщикиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПоставщикиE", typeof(IIS.Gotovoe_prilozhenie.Поставщики));
                }
            }
            
            /// <summary>
            /// "ПоставщикиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПоставщикиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПоставщикиL", typeof(IIS.Gotovoe_prilozhenie.Поставщики));
                }
            }
        }
    }
}
