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
    /// Перечень услуг.
    /// </summary>
    // *** Start programmer edit section *** (ПереченьУслуг CustomAttributes)

    // *** End programmer edit section *** (ПереченьУслуг CustomAttributes)
    [AutoAltered()]
    [Caption("Перечень услуг")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПереченьУслугE", new string[] {
            "Услуги as \'Услуги\'",
            "Услуги.Наименование as \'Наименование\'",
            "Количество as \'Количество\'",
            "Услуги.Стоимость as \'Стоимость\'"}, Hidden=new string[] {
            "Услуги.Наименование"})]
    [MasterViewDefineAttribute("ПереченьУслугE", "Услуги", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class ПереченьУслуг : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.Gotovoe_prilozhenie.Услуги fУслуги;
        
        private IIS.Gotovoe_prilozhenie.ПриходДенег fПриходДенег;
        
        // *** Start programmer edit section *** (ПереченьУслуг CustomMembers)

        // *** End programmer edit section *** (ПереченьУслуг CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьУслуг.Количество CustomAttributes)

        // *** End programmer edit section *** (ПереченьУслуг.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Get start)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Get end)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Set start)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Set end)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Set end)
            }
        }
        
        /// <summary>
        /// Перечень услуг.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьУслуг.Услуги CustomAttributes)

        // *** End programmer edit section *** (ПереченьУслуг.Услуги CustomAttributes)
        [PropertyStorage(new string[] {
                "Услуги"})]
        [NotNull()]
        public virtual IIS.Gotovoe_prilozhenie.Услуги Услуги
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьУслуг.Услуги Get start)

                // *** End programmer edit section *** (ПереченьУслуг.Услуги Get start)
                IIS.Gotovoe_prilozhenie.Услуги result = this.fУслуги;
                // *** Start programmer edit section *** (ПереченьУслуг.Услуги Get end)

                // *** End programmer edit section *** (ПереченьУслуг.Услуги Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьУслуг.Услуги Set start)

                // *** End programmer edit section *** (ПереченьУслуг.Услуги Set start)
                this.fУслуги = value;
                // *** Start programmer edit section *** (ПереченьУслуг.Услуги Set end)

                // *** End programmer edit section *** (ПереченьУслуг.Услуги Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Gotovoe_prilozhenie.ПриходДенег.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьУслуг.ПриходДенег CustomAttributes)

        // *** End programmer edit section *** (ПереченьУслуг.ПриходДенег CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ПриходДенег"})]
        public virtual IIS.Gotovoe_prilozhenie.ПриходДенег ПриходДенег
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьУслуг.ПриходДенег Get start)

                // *** End programmer edit section *** (ПереченьУслуг.ПриходДенег Get start)
                IIS.Gotovoe_prilozhenie.ПриходДенег result = this.fПриходДенег;
                // *** Start programmer edit section *** (ПереченьУслуг.ПриходДенег Get end)

                // *** End programmer edit section *** (ПереченьУслуг.ПриходДенег Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьУслуг.ПриходДенег Set start)

                // *** End programmer edit section *** (ПереченьУслуг.ПриходДенег Set start)
                this.fПриходДенег = value;
                // *** Start programmer edit section *** (ПереченьУслуг.ПриходДенег Set end)

                // *** End programmer edit section *** (ПереченьУслуг.ПриходДенег Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПереченьУслугE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПереченьУслугE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПереченьУслугE", typeof(IIS.Gotovoe_prilozhenie.ПереченьУслуг));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ПереченьУслуг.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfПереченьУслуг CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfПереченьУслуг CustomAttributes)
    public class DetailArrayOfПереченьУслуг : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Gotovoe_prilozhenie.DetailArrayOfПереченьУслуг members)

        // *** End programmer edit section *** (IIS.Gotovoe_prilozhenie.DetailArrayOfПереченьУслуг members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ПереченьУслуг by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ПереченьУслуг.
        /// </summary>
        public DetailArrayOfПереченьУслуг(IIS.Gotovoe_prilozhenie.ПриходДенег fПриходДенег) : 
                base(typeof(ПереченьУслуг), ((ICSSoft.STORMNET.DataObject)(fПриходДенег)))
        {
        }
        
        public IIS.Gotovoe_prilozhenie.ПереченьУслуг this[int index]
        {
            get
            {
                return ((IIS.Gotovoe_prilozhenie.ПереченьУслуг)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Gotovoe_prilozhenie.ПереченьУслуг dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
