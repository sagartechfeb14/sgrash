importPackage(com.cloupia.feature.automation);
importPackage(com.cloupia.model.cIM);
importPackage(com.cloupia.lib.util.jdbc);
importPackage(com.cloupia.fw.objstore);

var store = JDBCObjStoreHelper.getStore(new MailSettings().getClass());
var obj= store.queryAll();
if(obj.isEmpty()){

    logger.addError(" Mail settings are not available. Please configure Mail setup from Administration    menu   using System and Mail setup tab");
}else{
var settings = obj.get(0);


           logger.addInfo("smtp server : "+settings.getSmtpServer());
            output.smtpServer = settings.getSmtpServer();
           logger.addInfo("from email address = "+settings.getFromEmailAddress());
           output.fromEmailAddress = settings.getFromEmailAddress();
           logger.addInfo("smtp port : "+settings.getSmtpPort());
            output.smtpPort = settings.getSmtpPort();
           logger.addInfo("smtp user :"+settings.getSmtpUser());
           output.smtpUser= settings.getSmtpUser();
           logger.addInfo("cuic ip address : "+settings.getCuicIpAddress());
             output.cuicIpAddress = settings.getCuicIpAddress();
            logger.addInfo("smtp pass : "+settings.getSmtpPass());
           output.password =settings.getSmtpPass();

}
