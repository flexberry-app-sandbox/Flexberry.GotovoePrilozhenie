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
    /// Перечень мат.
    /// </summary>
    // *** Start programmer edit section *** (ПереченьМат CustomAttributes)

    // *** End programmer edit section *** (ПереченьМат CustomAttributes)
    [AutoAltered()]
    [Caption("Перечень материалов")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПереченьМатE", new string[] {
            "Материалы as \'Материалы\'",
            "Материалы.Наименование as \'Наименование\'",
            "Количество as \'Количество\'",
            "Материалы.Стоимость as \'Стоимость\'"}, Hidden=new string[] {
            "Материалы.Наименование"})]
    [MasterViewDefineAttribute("ПереченьМатE", "Материалы", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class ПереченьМат : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.Gotovoe_prilozhenie.Материалы fМатериалы;
        
        private IIS.Gotovoe_prilozhenie.РасходДенег fРасходДенег;
        
        // *** Start programmer edit section *** (ПереченьМат CustomMembers)

        // *** End programmer edit section *** (ПереченьМат CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьМат.Количество CustomAttributes)

        // *** End programmer edit section *** (ПереченьМат.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьМат.Количество Get start)

                // *** End programmer edit section *** (ПереченьМат.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (ПереченьМат.Количество Get end)

                // *** End programmer edit section *** (ПереченьМат.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьМат.Количество Set start)

                // *** End programmer edit section *** (ПереченьМат.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ПереченьМат.Количество Set end)

                // *** End programmer edit section *** (ПереченьМат.Количество Set end)
            }
        }
        
        /// <summary>
        /// Перечень мат.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьМат.Материалы CustomAttributes)

        // *** End programmer edit section *** (ПереченьМат.Материалы CustomAttributes)
        [PropertyStorage(new string[] {
                "Материалы"})]
        [NotNull()]
        public virtual IIS.Gotovoe_prilozhenie.Материалы Материалы
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьМат.Материалы Get start)

                // *** End programmer edit section *** (ПереченьМат.Материалы Get start)
                IIS.Gotovoe_prilozhenie.Материалы result = this.fМатериалы;
                // *** Start programmer edit section *** (ПереченьМат.Материалы Get end)

                // *** End programmer edit section *** (ПереченьМат.Материалы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьМат.Материалы Set start)

                // *** End programmer edit section *** (ПереченьМат.Материалы Set start)
                this.fМатериалы = value;
                // *** Start programmer edit section *** (ПереченьМат.Материалы Set end)

                // *** End programmer edit section *** (ПереченьМат.Материалы Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Gotovoe_prilozhenie.РасходДенег.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьМат.РасходДенег CustomAttributes)

        // *** End programmer edit section *** (ПереченьМат.РасходДенег CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "РасходДенег"})]
        public virtual IIS.Gotovoe_prilozhenie.РасходДенег РасходДенег
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьМат.РасходДенег Get start)

                // *** End programmer edit section *** (ПереченьМат.РасходДенег Get start)
                IIS.Gotovoe_prilozhenie.РасходДенег result = this.fРасходДенег;
                // *** Start programmer edit section *** (ПереченьМат.РасходДенег Get end)

                // *** End programmer edit section *** (ПереченьМат.РасходДенег Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьМат.РасходДенег Set start)

                // *** End programmer edit section *** (ПереченьМат.РасходДенег Set start)
                this.fРасходДенег = value;
                // *** Start programmer edit section *** (ПереченьМат.РасходДенег Set end)

                // *** End programmer edit section *** (ПереченьМат.РасходДенег Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПереченьМатE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПереченьМатE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПереченьМатE", typeof(IIS.Gotovoe_prilozhenie.ПереченьМат));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ПереченьМат.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfПереченьМат CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfПереченьМат CustomAttributes)
    public class DetailArrayOfПереченьМат : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Gotovoe_prilozhenie.DetailArrayOfПереченьМат members)

        // *** End programmer edit section *** (IIS.Gotovoe_prilozhenie.DetailArrayOfПереченьМат members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ПереченьМат by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ПереченьМат.
        /// </summary>
        public DetailArrayOfПереченьМат(IIS.Gotovoe_prilozhenie.РасходДенег fРасходДенег) : 
                base(typeof(ПереченьМат), ((ICSSoft.STORMNET.DataObject)(fРасходДенег)))
        {
        }
        
        public IIS.Gotovoe_prilozhenie.ПереченьМат this[int index]
        {
            get
            {
                return ((IIS.Gotovoe_prilozhenie.ПереченьМат)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Gotovoe_prilozhenie.ПереченьМат dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
